const materialDefaults = {
  pla: 190000,
  petg: 230000,
  abs: 210000,
  asa: 260000,
};

const defaultValues = {
  jobName: "Telefon stendi",
  materialType: "pla",
  quantity: 1,
  materialCostPerKg: materialDefaults.pla,
  weightGrams: 72,
  wastePercent: 7,
  printHours: 5,
  printMinutes: 40,
  laborMinutes: 25,
  laborRateHourly: 42209,
  hardwareCost: 0,
  packagingCost: 5000,
  powerWatts: 220,
  electricityRate: 650,
  printerPrice: 4500000,
  printerLifespanHours: 6000,
  maintenancePerHour: 2500,
  failureRate: 8,
  overheadPercent: 10,
  taxPercent: 12,
  customMargin: 35,
};

const fields = Object.fromEntries(
  Object.keys(defaultValues).map((key) => [key, document.getElementById(key)]),
);

const outputs = {
  unitCost: document.getElementById("unitCost"),
  totalCost: document.getElementById("totalCost"),
  unitWithTax: document.getElementById("unitWithTax"),
  priceLean: document.getElementById("priceLean"),
  priceStandard: document.getElementById("priceStandard"),
  pricePremium: document.getElementById("pricePremium"),
  priceCustom: document.getElementById("priceCustom"),
  priceCustomLabel: document.getElementById("priceCustomLabel"),
  materialBreakdown: document.getElementById("materialBreakdown"),
  laborBreakdown: document.getElementById("laborBreakdown"),
  hardwareBreakdown: document.getElementById("hardwareBreakdown"),
  packagingBreakdown: document.getElementById("packagingBreakdown"),
  machineBreakdown: document.getElementById("machineBreakdown"),
  summaryBreakdown: document.getElementById("summaryBreakdown"),
  formulaLine: document.getElementById("formulaLine"),
  allocationChart: document.getElementById("allocationChart"),
  allocationLegend: document.getElementById("allocationLegend"),
  allocationTotal: document.getElementById("allocationTotal"),
};

function getNumber(fieldName) {
  return Number(fields[fieldName].value) || 0;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("uz-UZ").format(Math.round(value)) + " so'm";
}

function calculatePrice(cost, marginPercent) {
  const margin = Math.min(Math.max(marginPercent, 0), 95) / 100;
  if (margin >= 0.95) {
    return cost;
  }

  return cost / (1 - margin);
}

function buildAllocationSegments(items) {
  const visibleItems = items.filter((item) => item.value > 0);
  const total = visibleItems.reduce((sum, item) => sum + item.value, 0);
  if (!total) {
    outputs.allocationChart.style.background =
      "conic-gradient(rgba(28, 22, 15, 0.08) 0deg 360deg)";
    outputs.allocationLegend.innerHTML = "";
    outputs.allocationTotal.textContent = "0 so'm";
    return;
  }

  let current = 0;
  const slices = visibleItems.map((item) => {
    const start = current;
    const angle = (item.value / total) * 360;
    current += angle;
    return `${item.color} ${start}deg ${current}deg`;
  });

  outputs.allocationChart.style.background = `conic-gradient(${slices.join(", ")})`;
  outputs.allocationTotal.textContent = formatCurrency(total);
  outputs.allocationLegend.innerHTML = visibleItems
    .map((item) => {
      const percent = total ? ((item.value / total) * 100).toFixed(1) : "0.0";
      return `
        <div class="legend-item">
          <span class="legend-dot" style="background:${item.color}"></span>
          <div class="legend-copy">
            <strong>${item.label}</strong>
            <span>${formatCurrency(item.value)} • ${percent}%</span>
          </div>
        </div>
      `;
    })
    .join("");
}

function resetDefaults() {
  Object.entries(defaultValues).forEach(([key, value]) => {
    fields[key].value = value;
  });
  updateCalculator();
}

function updateCalculator() {
  const quantity = Math.max(getNumber("quantity"), 1);
  const materialCostPerKg = getNumber("materialCostPerKg");
  const weightGrams = getNumber("weightGrams");
  const wastePercent = getNumber("wastePercent") / 100;
  const printHours = getNumber("printHours");
  const printMinutes = getNumber("printMinutes");
  const laborMinutes = getNumber("laborMinutes");
  const laborRateHourly = getNumber("laborRateHourly");
  const hardwareCost = getNumber("hardwareCost");
  const packagingCost = getNumber("packagingCost");
  const powerWatts = getNumber("powerWatts");
  const electricityRate = getNumber("electricityRate");
  const printerPrice = getNumber("printerPrice");
  const printerLifespanHours = Math.max(getNumber("printerLifespanHours"), 1);
  const maintenancePerHour = getNumber("maintenancePerHour");
  const failureRate = getNumber("failureRate") / 100;
  const overheadPercent = getNumber("overheadPercent") / 100;
  const taxPercent = getNumber("taxPercent") / 100;
  const customMargin = getNumber("customMargin");

  const printTimeHours = printHours + printMinutes / 60;
  const billableWeight = weightGrams * (1 + wastePercent);
  const materialCost = (billableWeight / 1000) * materialCostPerKg;
  const electricityCost = (powerWatts / 1000) * electricityRate * printTimeHours;
  const depreciationCost = (printerPrice / printerLifespanHours) * printTimeHours;
  const maintenanceCost = maintenancePerHour * printTimeHours;
  const laborCost = (laborMinutes / 60) * laborRateHourly;

  const directUnitCost =
    materialCost +
    electricityCost +
    depreciationCost +
    maintenanceCost +
    laborCost +
    hardwareCost +
    packagingCost;

  const failureBuffer = directUnitCost * failureRate;
  const overheadCost = (directUnitCost + failureBuffer) * overheadPercent;
  const unitCost = directUnitCost + failureBuffer + overheadCost;
  const totalCost = unitCost * quantity;
  const unitWithTax = unitCost * (1 + taxPercent);
  const machineBreakdown =
    electricityCost +
    depreciationCost +
    maintenanceCost +
    failureBuffer +
    overheadCost;

  const leanPrice = calculatePrice(unitCost, 20);
  const standardPrice = calculatePrice(unitCost, 35);
  const premiumPrice = calculatePrice(unitCost, 50);
  const customPrice = calculatePrice(unitCost, customMargin);

  outputs.unitCost.textContent = formatCurrency(unitCost);
  outputs.totalCost.textContent = formatCurrency(totalCost);
  outputs.unitWithTax.textContent = formatCurrency(unitWithTax);
  outputs.priceLean.textContent = formatCurrency(leanPrice);
  outputs.priceStandard.textContent = formatCurrency(standardPrice);
  outputs.pricePremium.textContent = formatCurrency(premiumPrice);
  outputs.priceCustom.textContent = formatCurrency(customPrice);
  outputs.priceCustomLabel.textContent = `${customMargin}% foyda`;

  outputs.materialBreakdown.textContent = formatCurrency(materialCost);
  outputs.laborBreakdown.textContent = formatCurrency(laborCost);
  outputs.hardwareBreakdown.textContent = formatCurrency(hardwareCost);
  outputs.packagingBreakdown.textContent = formatCurrency(packagingCost);
  outputs.machineBreakdown.textContent = formatCurrency(machineBreakdown);
  outputs.summaryBreakdown.textContent = formatCurrency(unitCost);
  outputs.formulaLine.textContent =
    `${quantity} dona | ${billableWeight.toFixed(1)}g billable weight | ` +
    `${printTimeHours.toFixed(2)} soat print | ` +
    `unit tannarx ${formatCurrency(unitCost)}`;

  buildAllocationSegments([
    { label: "Material", value: materialCost, color: "#bf5a2b" },
    { label: "Mehnat", value: laborCost, color: "#2563eb" },
    { label: "Detal", value: hardwareCost, color: "#dc2626" },
    { label: "Qadoqlash", value: packagingCost, color: "#0891b2" },
    { label: "Printer", value: machineBreakdown, color: "#0f766e" },
  ]);
}

document.getElementById("calculator-form").addEventListener("input", updateCalculator);
document.getElementById("reset-defaults").addEventListener("click", resetDefaults);
fields.materialType.addEventListener("change", () => {
  fields.materialCostPerKg.value = materialDefaults[fields.materialType.value];
  updateCalculator();
});

updateCalculator();
