#!/usr/bin/env python3

import json
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET

NS = {"main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
REL_NS = "{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"

WORKBOOK_NAME = "uzuminfo.xlsx"
OUTPUT_NAME = "uzum-data.js"


def load_workbook_rows(path: Path):
    with zipfile.ZipFile(path) as archive:
        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        rel_map = {rel.attrib["Id"]: rel.attrib["Target"] for rel in rels}

        shared_strings = []
        if "xl/sharedStrings.xml" in archive.namelist():
            shared_root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
            for item in shared_root.findall("main:si", NS):
                shared_strings.append(
                    "".join(text.text or "" for text in item.iterfind(".//main:t", NS))
                )

        rows_by_sheet = {}
        for sheet in workbook.find("main:sheets", NS):
            name = sheet.attrib["name"]
            target = rel_map[sheet.attrib[REL_NS]]
            root = ET.fromstring(archive.read(f"xl/{target}"))
            rows = []
            for row in root.findall(".//main:sheetData/main:row", NS):
                values = []
                for cell in row.findall("main:c", NS):
                    cell_type = cell.attrib.get("t")
                    value = cell.find("main:v", NS)
                    if value is None:
                        values.append("")
                    elif cell_type == "s":
                        values.append(shared_strings[int(value.text)])
                    else:
                        values.append(value.text or "")
                if any(str(item).strip() for item in values):
                    rows.append(values)
            rows_by_sheet[name] = rows

    return rows_by_sheet


def parse_number(value):
    if value is None:
        return None
    raw = str(value).strip()
    if not raw or raw in {"-", "-%"}:
        return None
    raw = raw.replace("\u00a0", "").replace(" ", "").replace(",", ".")
    try:
        return float(raw)
    except ValueError:
        return None


def clean_text(value):
    if value is None:
        return ""
    return re.sub(r"\s+", " ", str(value).strip())


def category_path(row):
    return [clean_text(value) for value in row[2:8] if clean_text(value)]


def parse_commission_sheet(rows):
    categories = {}
    for row in rows[4:]:
        category_id = parse_number(row[0] if len(row) > 0 else "")
        if category_id is None:
            continue

        categories[str(int(category_id))] = {
            "path": category_path(row),
            "commission": {
                "fbo": parse_number(row[14] if len(row) > 14 else ""),
                "fbs": parse_number(row[15] if len(row) > 15 else ""),
                "dbs": parse_number(row[16] if len(row) > 16 else ""),
            },
            "discount": {
                "fbo": parse_number(row[11] if len(row) > 11 else ""),
                "fbs": parse_number(row[12] if len(row) > 12 else ""),
                "dbs": parse_number(row[13] if len(row) > 13 else ""),
            },
        }
    return categories


def parse_appendix_pairs(rows):
    pairs = set()
    for row in rows[2:]:
        category_1 = clean_text(row[0] if len(row) > 0 else "")
        category_2 = clean_text(row[1] if len(row) > 1 else "")
        if category_1 and category_2:
            pairs.add((category_1, category_2))
    return pairs


def parse_storage_rules(rows):
    return {
        "standard": {
            "tiers": [
                {"minDays": 0, "rate": 0},
                {"minDays": 61, "rate": 12},
                {"minDays": 181, "rate": 18},
                {"minDays": 361, "rate": 24},
            ],
            "maxDailyFee": int(parse_number(rows[7][2]) or 5000),
        },
        "special": {
            "tiers": [
                {"minDays": 0, "rate": 0},
                {"minDays": 61, "rate": 12},
                {"minDays": 181, "rate": 14},
                {"minDays": 361, "rate": 18},
            ],
            "maxDailyFee": int(parse_number(rows[14][2]) or 3000),
        },
        "defaultFreeDays": 30,
        "extendedFreeDays": 60,
    }


def parse_logistics(rows):
    return {
        "baseFee": int(parse_number(rows[1][0]) or 5250),
        "extraLiterFee": int(parse_number(rows[2][0]) or 250),
        "maxFee": int(parse_number(rows[3][0]) or 50000),
        "missingDimensionsFee": int(parse_number(rows[4][0]) or 50000),
    }


def build_dataset(rows_by_sheet):
    ru_categories = parse_commission_sheet(rows_by_sheet["Комиссия на продажу"])
    uz_categories = parse_commission_sheet(rows_by_sheet["Savdo komissiyasi"])

    special_uz = parse_appendix_pairs(rows_by_sheet["1-ilova"])
    special_ru = parse_appendix_pairs(rows_by_sheet["Приложение 1"])
    extended_uz = parse_appendix_pairs(rows_by_sheet["2-ilova"])
    extended_ru = parse_appendix_pairs(rows_by_sheet["Приложение 2"])

    categories = []
    for category_id, uz_entry in sorted(uz_categories.items(), key=lambda item: int(item[0])):
        ru_entry = ru_categories.get(category_id, {})
        uz_path = uz_entry["path"]
        ru_path = ru_entry.get("path") or uz_path
        key_uz = tuple(uz_path[:2])
        key_ru = tuple(ru_path[:2])

        categories.append(
            {
                "id": category_id,
                "uz": uz_path,
                "ru": ru_path,
                "commission": uz_entry["commission"],
                "discount": uz_entry["discount"],
                "specialTariff": key_uz in special_uz or key_ru in special_ru,
                "freeStorageDays": 60
                if key_uz in extended_uz or key_ru in extended_ru
                else 30,
            }
        )

    return {
        "meta": {
            "sourceFile": WORKBOOK_NAME,
            "categoryCount": len(categories),
        },
        "categories": categories,
        "logistics": parse_logistics(rows_by_sheet["Logistika tarifi (log-yig‘im)"]),
        "storage": parse_storage_rules(rows_by_sheet["Saqlash uchun tarif"]),
    }


def main():
    root = Path(__file__).resolve().parent.parent
    workbook_path = root / WORKBOOK_NAME
    output_path = root / OUTPUT_NAME

    if not workbook_path.exists():
        raise SystemExit(f"Missing workbook: {workbook_path}")

    rows_by_sheet = load_workbook_rows(workbook_path)
    dataset = build_dataset(rows_by_sheet)
    payload = "window.UZUM_DATA = " + json.dumps(
        dataset,
        ensure_ascii=False,
        separators=(",", ":"),
    ) + ";\n"
    output_path.write_text(payload, encoding="utf-8")
    print(f"Wrote {output_path} with {dataset['meta']['categoryCount']} categories")


if __name__ == "__main__":
    main()
