const materialDefaults = {
  pla: 190000,
  petg: 230000,
  abs: 210000,
  asa: 260000,
};

const translations = {
  uz: {
    pageTitle: "3D Print Narx Kalkulyatori",
    metaDescription:
      "O'zbekiston sharoiti uchun 3D print narx kalkulyatori. Filament, elektr, amortizatsiya, ish haqi va Uzum xarajatlari bilan yakuniy narxni hisoblang.",
    defaultJobName: "Telefon stendi",
    currencySuffix: "so'm",
    texts: {
      heroEyebrow: "O'zbekiston uchun",
      heroTitle: "3D print narx kalkulyatori",
      heroMini:
        "UZS, mahalliy elektr tarifi, ish haqi va printer amortizatsiyasi bilan",
      heroPill1: "FDM uchun tayyor",
      heroPill2: "UZS format",
      heroPill3: "Uzum xarajatlari bilan",
      presetTitle: "Standart presetlar",
      presetLabel1: "PLA filament",
      presetLabel2: "Uy elektr tarifi",
      presetLabel3: "Ish haqi bazasi",
      presetLabel4: "Nosozlik riski",
      presetNote:
        "Qiymatlar boshlang'ich nuqta sifatida berilgan. O'zingizning real xarajatingizga qarab darhol o'zgartiring.",
      calculatorKicker: "Kalkulyator",
      calculatorTitle: "Loyiha parametrlari",
      resetButtonText: "Standart qiymatlar",
      labelJobName: "Buyurtma nomi",
      labelMaterialType: "Material",
      labelQuantity: "Soni",
      labelMaterialCostPerKg: "Filament narxi / kg",
      labelWeightGrams: "Bir dona vazni (gramm)",
      labelWastePercent: "Support va chiqindi zaxirasi (%)",
      labelPrintHours: "Print vaqti (soat)",
      labelPrintMinutes: "Print vaqti (daqiqa)",
      labelLaborMinutes: "Tayyorlash va ishlov berish (daqiqa)",
      labelHardwareCost: "Qo'shimcha detal xarajati / dona",
      labelPackagingCost: "Qadoqlash xarajati / dona",
      uzumToggleTitle: "Uzum Market uchun hisoblash",
      uzumToggleSubtitle:
        "Komissiya, logistika va FBO saqlash xarajatini narxga qo'shing",
      uzumSwitchLabel: "Yoqish",
      labelUzumModel: "Savdo modeli",
      labelUzumLevel1: "Kategoriya 1",
      labelUzumLevel2: "Kategoriya 2",
      labelUzumLevel3: "Kategoriya 3",
      labelUzumLevel4: "Kategoriya 4",
      labelUzumLevel5: "Kategoriya 5",
      labelUzumLevel6: "Kategoriya 6",
      labelUzumLength: "Qadoq uzunligi (mm)",
      labelUzumWidth: "Qadoq kengligi (mm)",
      labelUzumHeight: "Qadoq balandligi (mm)",
      labelIncludeStorage: "FBO saqlashni qo'shish",
      storageToggleNote: "Aylanuvchanlik kiritilganda hisoblanadi",
      labelTurnoverDays: "Aylanuvchanlik (kun)",
      volumeLabel: "Hajm",
      categoryBreadcrumbLabel: "Tanlangan kategoriya",
      tariffBadgeLabel: "Tarif turi",
      tariffBadge: "Maxsus tarif",
      advancedSummary: "Kengaytirilgan sozlamalar",
      labelLaborRateHourly: "Ish haqi / soat",
      labelPowerWatts: "Printer quvvati (W)",
      labelElectricityRate: "Elektr narxi / kWh",
      labelPrinterPrice: "Printer narxi",
      labelPrinterLifespanHours: "Printer xizmat muddati (soat)",
      labelMaintenancePerHour: "Servis va sarf / soat",
      labelFailureRate: "Nosoz print riski (%)",
      labelOverheadPercent: "Qo'shimcha xarajatlar (%)",
      labelTaxPercent: "Soliq / QQS (%)",
      resultsKicker: "Natija",
      resultsTitle: "Narx tavsiyalari",
      summaryLabelUnitCost: "1 dona to'liq tannarx",
      summaryLabelTotalCost: "Buyurtma umumiy tannarx",
      summaryLabelUnitWithTax: "1 dona VAT bilan",
      priceLeanTitle: "Tez sotish",
      priceLeanLabel: "20% foyda",
      priceStandardTitle: "Standart narx",
      priceStandardLabel: "35% foyda",
      pricePremiumTitle: "Biznes zaxira",
      pricePremiumLabel: "50% foyda",
      priceCustomTitle: "O'zingizniki",
      breakdownTitle: "Xarajat tarkibi",
      breakdownModeChip: "Ishlab chiqarish tannarxi",
      allocationTotalLabel: "jami tannarx",
      breakdownMaterialLabel: "Material",
      breakdownLaborLabel: "Mehnat",
      breakdownHardwareLabel: "Detal",
      breakdownPackagingLabel: "Qadoqlash",
      breakdownMachineLabel: "Printer",
      breakdownLogisticsLabel: "Logistika",
      breakdownStorageLabel: "Saqlash",
      breakdownCommissionLabel: "Komissiya",
      breakdownSummaryLabel: "Jami",
      formulaTitle: "Formula",
      sourcesNote:
        "Preset manbalari: elektr tarifi 2026-yil 1-iyundan boshlab aholi uchun 650 so'm/kWh; o'rtacha oylik ish haqi 2026-yil yanvar-iyunda 7 091 100 so'm. Filament narxi esa mahalliy marketplace listinglaridan olingan taxminiy boshlang'ich qiymat.",
      sourceLinkElectricity: "Elektr tarifi manbasi",
      sourceLinkSalary: "Ish haqi manbasi",
      sourceLinkMarket: "Filament bozor narxlari",
      sourceLinkPla: "PLA listing namunasi",
      faqKicker: "Savol-javob",
      faqTitle: "Ko'p so'raladigan savollar",
      faqQuestion1: "Bu 3D print kalkulyatori qanchalik aniq?",
      faqAnswer1:
        "Kalkulyator material, print vaqti, printer ishlashi, elektr, mehnat va qo'shimcha xarajatlarni hisobga oladi. Yakuniy natija slicer sozlamalari, printer kalibrovkasi va real elektr sarfiga qarab biroz farq qilishi mumkin.",
      faqQuestion2: "3D print umumiy narxiga nimalar ta'sir qiladi?",
      faqAnswer2:
        "Asosiy omillar: filament narxi va sarfi, print davomiyligi, elektr sarfi, printer amortizatsiyasi, servis, mehnat, ishlov berish, qadoqlash va qo'shimcha detal xarajatlari.",
      faqQuestion3: "Filament og'irligini qayerdan bilaman?",
      faqAnswer3:
        "Ko'p slicerlar, masalan Bambu Studio, PrusaSlicer, Cura va OrcaSlicer, kesishdan keyin taxminiy grammini ko'rsatadi. Eng yaxshi amaliyot shu qiymatdan foydalanishdir.",
      faqQuestion4: "Nega mehnat xarajatini kiritish kerak?",
      faqAnswer4:
        "Sotuv uchun real narx chiqarmoqchi bo'lsangiz, fayl tayyorlash, printer sozlash, support yechish, tozalash va sifat nazorati uchun ketgan vaqtni hisoblash kerak bo'ladi.",
      faqQuestion5: "3D print xarajatini qanday kamaytirish mumkin?",
      faqAnswer5:
        "Infill, layer height, wall count va orientatsiyani sinab ko'ring. Kichik sozlamalar print vaqtini va material sarfini kamaytirib, sifatni saqlab qolishi mumkin.",
      faqQuestion6: "1 gramm print narxini qanday hisoblayman?",
      faqAnswer6:
        "Oddiy formula: spool narxi / spool vazni. Lekin sotuv uchun bu yetarli emas, chunki elektr, print vaqti, amortizatsiya va mehnat ham qo'shiladi.",
      faqQuestion7: "Elektr narxi qanday hisoblanadi?",
      faqAnswer7:
        "Printer quvvati (W), print davomiyligi va kWh narxiga qarab hisoblanadi. Kalkulyator bu uchalasidan avtomatik tarzda elektr xarajatini chiqaradi.",
      faqQuestion8: "Printer uchun yaxshi soatbay stavka nima?",
      faqAnswer8:
        "Odatda bu printer narxining xizmat muddatiga bo'lingan qismi, servis xarajati va ehtiyotkor overhead zaxirasidan iborat bo'ladi. Boshlanishiga konservativ qiymatdan foydalanib, keyin real natijalarga qarab aniqlashtiring.",
      faqQuestion9: "3D printni foyda bilan qanday narxlash kerak?",
      faqAnswer9:
        "Avval to'liq tannarxni hisoblang, keyin ustiga foyda foizini qo'shing. Tannarx ichiga material, elektr, printer vaqti, mehnat, qadoqlash va risk zaxirasi kirishi kerak.",
      faqQuestion10:
        "PLA va PETG dan boshqa materiallar uchun ham ishlatish mumkinmi?",
      faqAnswer10:
        "Ha. Kalkulyator defaultda oddiy material presetlari bilan keladi, lekin siz material narxini va boshqa parametrlarni istalgan filament turiga moslab o'zgartirishingiz mumkin.",
    },
    prompts: {
      chooseCategory: "Tanlang",
      notSelected: "Tanlanmagan",
      categoryPrompt:
        "Kategoriya va model tanlang, keyin Uzum xarajatlari avtomatik qo'shiladi.",
      invalidDimensions: "Uzum uchun barcha qadoq o'lchamlari 0 dan katta bo'lishi kerak.",
      categoryUnavailable:
        "Tanlangan kategoriya bu modelda mavjud emas. Boshqa model yoki kategoriyani tanlang.",
      missingCategory: "Uzum narxini hisoblash uchun kategoriyani to'liq tanlang.",
      invalidTurnover:
        "Saqlashni hisoblash uchun aylanuvchanlik kunini 0 yoki undan katta kiriting.",
      impossiblePrice:
        "Komissiya va foyda foizi yig'indisi bu model uchun juda baland. Foyda foizini pasaytiring.",
      standardCostChip: "Ishlab chiqarish tannarxi",
      uzumCostChip: "Uzum bilan standart narx xarajati",
      totalCostLabel: "jami tannarx",
      totalMarketplaceLabel: "jami xarajat",
      specialTariff: "Maxsus tarif",
      standardTariff: "Standart tarif",
      storageOff: "Saqlash hisobga olinmadi",
      storageNotNeeded: "Bu modelda Uzum saqlashi yo'q",
      storageSummary:
        "Saqlash: {dailyFee}/kun × {chargeableDays} kun, bepul limit {freeDays} kun",
      noStorageCharge: "Saqlash: 0, bepul limit {freeDays} kun",
      volumeFormat: "{rounded} l ({raw} l)",
      categoryFallback: "-",
      modelLabel: "model",
      formulaBase:
        "Tannarx = material + elektr + amortizatsiya + servis + mehnat + detal + qadoqlash + risk + qo'shimcha xarajatlar",
      formulaUzum:
        "Standart Uzum narxi = (tannarx + logistika + saqlash) / (1 - komissiya - foyda)",
      commissionLegend: "Komissiya (35% narx)",
      storageLegend: "Saqlash",
      logisticsLegend: "Logistika",
      noUzumBadge: "Ishlab chiqarish tannarxi",
      customPricePlaceholder: "Masalan 120000",
      profitSummaryLabel: "{percent}% foyda = {amount}",
      readyStatus:
        "{model} | {category} | Hajm {volume} | Logistika {logistics} | Komissiya {commissionPercent}%",
      readyStatusWithStorage:
        "{model} | {category} | Hajm {volume} | Logistika {logistics} | Komissiya {commissionPercent}% | {storageLine}",
    },
  },
  ru: {
    pageTitle: "Калькулятор Цены 3D Печати",
    metaDescription:
      "Калькулятор цены 3D печати для Узбекистана. Рассчитайте финальную цену с учетом филамента, электричества, амортизации, труда и расходов Uzum.",
    defaultJobName: "Подставка для телефона",
    currencySuffix: "сум",
    texts: {
      heroEyebrow: "Для Узбекистана",
      heroTitle: "Калькулятор цены 3D печати",
      heroMini:
        "UZS, местный тариф на электричество, труд и амортизация принтера",
      heroPill1: "Готово для FDM",
      heroPill2: "Формат UZS",
      heroPill3: "С расходами Uzum",
      presetTitle: "Стандартные пресеты",
      presetLabel1: "PLA филамент",
      presetLabel2: "Домашний тариф на электричество",
      presetLabel3: "Базовая ставка труда",
      presetLabel4: "Риск брака",
      presetNote:
        "Значения даны как стартовая точка. Сразу подстройте их под свои реальные расходы.",
      calculatorKicker: "Калькулятор",
      calculatorTitle: "Параметры проекта",
      resetButtonText: "Стандартные значения",
      labelJobName: "Название заказа",
      labelMaterialType: "Материал",
      labelQuantity: "Количество",
      labelMaterialCostPerKg: "Цена филамента / кг",
      labelWeightGrams: "Вес одной штуки (грамм)",
      labelWastePercent: "Запас на поддержки и отходы (%)",
      labelPrintHours: "Время печати (часы)",
      labelPrintMinutes: "Время печати (минуты)",
      labelLaborMinutes: "Подготовка и постобработка (минуты)",
      labelHardwareCost: "Доп. комплектующие / штука",
      labelPackagingCost: "Упаковка / штука",
      uzumToggleTitle: "Расчет для Uzum Market",
      uzumToggleSubtitle:
        "Добавьте комиссию, логистику и хранение FBO в цену продажи",
      uzumSwitchLabel: "Включить",
      labelUzumModel: "Модель продаж",
      labelUzumLevel1: "Категория 1",
      labelUzumLevel2: "Категория 2",
      labelUzumLevel3: "Категория 3",
      labelUzumLevel4: "Категория 4",
      labelUzumLevel5: "Категория 5",
      labelUzumLevel6: "Категория 6",
      labelUzumLength: "Длина упаковки (мм)",
      labelUzumWidth: "Ширина упаковки (мм)",
      labelUzumHeight: "Высота упаковки (мм)",
      labelIncludeStorage: "Добавить хранение FBO",
      storageToggleNote: "Считается после ввода оборачиваемости",
      labelTurnoverDays: "Оборачиваемость (дни)",
      volumeLabel: "Объем",
      categoryBreadcrumbLabel: "Выбранная категория",
      tariffBadgeLabel: "Тип тарифа",
      tariffBadge: "Специальный тариф",
      advancedSummary: "Расширенные настройки",
      labelLaborRateHourly: "Оплата труда / час",
      labelPowerWatts: "Мощность принтера (W)",
      labelElectricityRate: "Цена электричества / kWh",
      labelPrinterPrice: "Цена принтера",
      labelPrinterLifespanHours: "Срок службы принтера (часы)",
      labelMaintenancePerHour: "Сервис и расходники / час",
      labelFailureRate: "Риск брака (%)",
      labelOverheadPercent: "Накладные расходы (%)",
      labelTaxPercent: "Налог / НДС (%)",
      resultsKicker: "Результат",
      resultsTitle: "Рекомендованные цены",
      summaryLabelUnitCost: "Полная себестоимость 1 шт.",
      summaryLabelTotalCost: "Общая себестоимость заказа",
      summaryLabelUnitWithTax: "1 шт. с НДС",
      priceLeanTitle: "Быстрая продажа",
      priceLeanLabel: "20% прибыли",
      priceStandardTitle: "Стандартная цена",
      priceStandardLabel: "35% прибыли",
      pricePremiumTitle: "Бизнес-запас",
      pricePremiumLabel: "50% прибыли",
      priceCustomTitle: "Своя цена",
      breakdownTitle: "Структура затрат",
      breakdownModeChip: "Производственная себестоимость",
      allocationTotalLabel: "итоговая себестоимость",
      breakdownMaterialLabel: "Материал",
      breakdownLaborLabel: "Труд",
      breakdownHardwareLabel: "Детали",
      breakdownPackagingLabel: "Упаковка",
      breakdownMachineLabel: "Принтер",
      breakdownLogisticsLabel: "Логистика",
      breakdownStorageLabel: "Хранение",
      breakdownCommissionLabel: "Комиссия",
      breakdownSummaryLabel: "Итого",
      formulaTitle: "Формула",
      sourcesNote:
        "Источники пресетов: с 1 июня 2026 года тариф на электричество для населения составляет 650 сум/kWh; средняя месячная зарплата в январе-июне 2026 года — 7 091 100 сум. Цена филамента взята как ориентир по местным маркетплейсам.",
      sourceLinkElectricity: "Источник тарифа на электричество",
      sourceLinkSalary: "Источник по зарплате",
      sourceLinkMarket: "Рыночные цены на филамент",
      sourceLinkPla: "Пример PLA листинга",
      faqKicker: "Вопрос-ответ",
      faqTitle: "Часто задаваемые вопросы",
      faqQuestion1: "Насколько точен этот калькулятор 3D печати?",
      faqAnswer1:
        "Калькулятор учитывает материал, время печати, работу принтера, электричество, труд и дополнительные расходы. Итог может немного отличаться в зависимости от настроек слайсера, калибровки принтера и реального потребления.",
      faqQuestion2: "Что влияет на итоговую цену 3D печати?",
      faqAnswer2:
        "Основные факторы: цена и расход филамента, длительность печати, электричество, амортизация принтера, сервис, труд, постобработка, упаковка и дополнительные комплектующие.",
      faqQuestion3: "Где узнать вес филамента?",
      faqAnswer3:
        "Большинство слайсеров, например Bambu Studio, PrusaSlicer, Cura и OrcaSlicer, показывают примерный вес после нарезки. Лучше всего брать именно это значение.",
      faqQuestion4: "Почему нужно учитывать стоимость труда?",
      faqAnswer4:
        "Если вы продаете изделие, нужно учитывать время на подготовку файла, настройку принтера, снятие поддержек, очистку и контроль качества.",
      faqQuestion5: "Как снизить стоимость 3D печати?",
      faqAnswer5:
        "Пробуйте менять infill, layer height, wall count и ориентацию модели. Небольшие настройки часто сокращают время печати и расход материала без потери качества.",
      faqQuestion6: "Как посчитать цену 1 грамма печати?",
      faqAnswer6:
        "Простая формула: цена катушки / вес катушки. Но для продажи этого мало, потому что нужно добавить электричество, время печати, амортизацию и труд.",
      faqQuestion7: "Как считается электричество?",
      faqAnswer7:
        "Расчет зависит от мощности принтера (W), длительности печати и цены за kWh. Калькулятор считает эту часть автоматически.",
      faqQuestion8: "Какая почасовая ставка для принтера считается нормальной?",
      faqAnswer8:
        "Обычно это цена принтера, разделенная на срок службы, плюс сервисные расходы и осторожный запас на накладные расходы. Начните с консервативного значения и уточняйте по факту.",
      faqQuestion9: "Как продавать 3D печать с прибылью?",
      faqAnswer9:
        "Сначала посчитайте полную себестоимость, затем добавьте целевой процент прибыли. В себестоимость должны входить материал, электричество, время принтера, труд, упаковка и запас на риски.",
      faqQuestion10:
        "Можно ли использовать калькулятор для материалов кроме PLA и PETG?",
      faqAnswer10:
        "Да. По умолчанию калькулятор идет с простыми пресетами материалов, но вы можете заменить цену материала и остальные параметры под любой тип филамента.",
    },
    prompts: {
      chooseCategory: "Выберите",
      notSelected: "Не выбрано",
      categoryPrompt:
        "Выберите категорию и модель, после чего расходы Uzum добавятся автоматически.",
      invalidDimensions:
        "Для расчета Uzum все размеры упаковки должны быть больше 0.",
      categoryUnavailable:
        "Выбранная категория недоступна для этой модели. Выберите другую модель или категорию.",
      missingCategory:
        "Чтобы рассчитать цену для Uzum, выберите категорию полностью.",
      invalidTurnover:
        "Чтобы посчитать хранение, введите оборачиваемость 0 или больше дней.",
      impossiblePrice:
        "Сумма комиссии и целевой прибыли слишком велика для этой модели. Уменьшите процент прибыли.",
      standardCostChip: "Производственная себестоимость",
      uzumCostChip: "Расходы по стандартной цене Uzum",
      totalCostLabel: "итоговая себестоимость",
      totalMarketplaceLabel: "итоговые расходы",
      specialTariff: "Специальный тариф",
      standardTariff: "Стандартный тариф",
      storageOff: "Хранение не учитывается",
      storageNotNeeded: "Для этой модели хранения Uzum нет",
      storageSummary:
        "Хранение: {dailyFee}/день × {chargeableDays} дн., бесплатный лимит {freeDays} дн.",
      noStorageCharge: "Хранение: 0, бесплатный лимит {freeDays} дн.",
      volumeFormat: "{rounded} л ({raw} л)",
      categoryFallback: "-",
      modelLabel: "модель",
      formulaBase:
        "Себестоимость = материал + электричество + амортизация + сервис + труд + детали + упаковка + риск + накладные расходы",
      formulaUzum:
        "Стандартная цена Uzum = (себестоимость + логистика + хранение) / (1 - комиссия - прибыль)",
      commissionLegend: "Комиссия (цена 35%)",
      storageLegend: "Хранение",
      logisticsLegend: "Логистика",
      noUzumBadge: "Производственная себестоимость",
      customPricePlaceholder: "Например 120000",
      profitSummaryLabel: "{percent}% прибыли = {amount}",
      readyStatus:
        "{model} | {category} | Объем {volume} | Логистика {logistics} | Комиссия {commissionPercent}%",
      readyStatusWithStorage:
        "{model} | {category} | Объем {volume} | Логистика {logistics} | Комиссия {commissionPercent}% | {storageLine}",
    },
  },
};

const defaultValues = {
  jobName: translations.uz.defaultJobName,
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
  uzumModel: "fbo",
  uzumLength: 210,
  uzumWidth: 210,
  uzumHeight: 70,
  turnoverDays: 90,
};

const fields = {
  ...Object.fromEntries(
    Object.keys(defaultValues).map((key) => [key, document.getElementById(key)]),
  ),
  useUzum: document.getElementById("useUzum"),
  includeStorage: document.getElementById("includeStorage"),
  customSellingPrice: document.getElementById("customSellingPrice"),
};

const outputs = {
  unitCost: document.getElementById("unitCost"),
  totalCost: document.getElementById("totalCost"),
  unitWithTax: document.getElementById("unitWithTax"),
  priceLean: document.getElementById("priceLean"),
  priceStandard: document.getElementById("priceStandard"),
  pricePremium: document.getElementById("pricePremium"),
  priceCustomLabel: document.getElementById("priceCustomLabel"),
  materialBreakdown: document.getElementById("materialBreakdown"),
  laborBreakdown: document.getElementById("laborBreakdown"),
  hardwareBreakdown: document.getElementById("hardwareBreakdown"),
  packagingBreakdown: document.getElementById("packagingBreakdown"),
  machineBreakdown: document.getElementById("machineBreakdown"),
  logisticsBreakdown: document.getElementById("logisticsBreakdown"),
  storageBreakdown: document.getElementById("storageBreakdown"),
  commissionBreakdown: document.getElementById("commissionBreakdown"),
  summaryBreakdown: document.getElementById("summaryBreakdown"),
  formulaLine: document.getElementById("formulaLine"),
  allocationChart: document.getElementById("allocationChart"),
  allocationLegend: document.getElementById("allocationLegend"),
  allocationTotal: document.getElementById("allocationTotal"),
  allocationTotalLabel: document.getElementById("allocationTotalLabel"),
  volumeOutput: document.getElementById("volumeOutput"),
  categoryBreadcrumb: document.getElementById("categoryBreadcrumb"),
  uzumStatusText: document.getElementById("uzumStatusText"),
  tariffBadgeWrap: document.getElementById("tariffBadgeWrap"),
  tariffBadge: document.getElementById("tariffBadge"),
  breakdownModeChip: document.getElementById("breakdownModeChip"),
};

const ui = {
  description: document.querySelector('meta[name="description"]'),
  langUz: document.getElementById("langUz"),
  langRu: document.getElementById("langRu"),
  uzumFields: document.getElementById("uzumFields"),
  storageToggleWrap: document.getElementById("storageToggleWrap"),
  turnoverWrap: document.getElementById("turnoverWrap"),
  uzumLevelWraps: [
    document.getElementById("uzumLevel1").closest("label"),
    document.getElementById("uzumLevel2Wrap"),
    document.getElementById("uzumLevel3Wrap"),
    document.getElementById("uzumLevel4Wrap"),
    document.getElementById("uzumLevel5Wrap"),
    document.getElementById("uzumLevel6Wrap"),
  ],
  levelSelects: [
    document.getElementById("uzumLevel1"),
    document.getElementById("uzumLevel2"),
    document.getElementById("uzumLevel3"),
    document.getElementById("uzumLevel4"),
    document.getElementById("uzumLevel5"),
    document.getElementById("uzumLevel6"),
  ],
  priceCards: {
    lean: document.getElementById("priceCardLean"),
    standard: document.getElementById("priceCardStandard"),
    premium: document.getElementById("priceCardPremium"),
    custom: document.getElementById("priceCardCustom"),
  },
};

let currentLang = "uz";
let lastLanguageDefaultName = translations.uz.defaultJobName;
let selectedPriceTier = "standard";

function t() {
  return translations[currentLang];
}

function getNumber(fieldName) {
  return Number(fields[fieldName].value) || 0;
}

function getOptionalPositiveNumber(fieldName) {
  const rawValue = fields[fieldName].value.trim();
  if (!rawValue) {
    return null;
  }

  const parsedValue = Number(rawValue);
  return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : null;
}

function interpolate(template, values) {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function formatCurrency(value) {
  const locale = currentLang === "ru" ? "ru-RU" : "uz-UZ";
  return (
    new Intl.NumberFormat(locale).format(Math.round(value)) +
    " " +
    translations[currentLang].currencySuffix
  );
}

function formatPercent(rate) {
  const locale = currentLang === "ru" ? "ru-RU" : "uz-UZ";
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: rate * 100 % 1 === 0 ? 0 : 1,
  }).format(rate * 100);
}

function formatPlainPercent(value) {
  const locale = currentLang === "ru" ? "ru-RU" : "uz-UZ";
  return new Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(value);
}

function setLocalizedText() {
  document.documentElement.lang = currentLang;
  document.title = t().pageTitle;
  ui.description.setAttribute("content", t().metaDescription);

  Object.entries(t().texts).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });

  ui.langUz.classList.toggle("active", currentLang === "uz");
  ui.langRu.classList.toggle("active", currentLang === "ru");
  outputs.tariffBadge.textContent = t().prompts.specialTariff;
  fields.customSellingPrice.placeholder = t().prompts.customPricePlaceholder;
}

function calculatePrice(cost, marginPercent) {
  const margin = Math.min(Math.max(marginPercent, 0), 95) / 100;
  if (margin >= 0.95) {
    return cost;
  }

  return cost / (1 - margin);
}

function calculateMarketplacePrice(cost, marginPercent, commissionRate) {
  const margin = Math.min(Math.max(marginPercent, 0), 95) / 100;
  const denominator = 1 - commissionRate - margin;
  if (denominator <= 0) {
    return null;
  }
  return cost / denominator;
}

function calculateProfitFromSellingPrice(unitCost, sellingPrice, commissionRate = 0) {
  if (!sellingPrice || sellingPrice <= 0) {
    return null;
  }

  const profitAmount = sellingPrice * (1 - commissionRate) - unitCost;
  const profitPercent = (profitAmount / sellingPrice) * 100;

  return { profitAmount, profitPercent, sellingPrice };
}

function buildCustomPriceLabel(profit) {
  if (!profit) {
    return "";
  }

  return interpolate(t().prompts.profitSummaryLabel, {
    percent: formatPlainPercent(profit.profitPercent),
    amount: formatCurrency(profit.profitAmount),
  });
}

function buildAllocationSegments(items, totalLabel) {
  const visibleItems = items.filter((item) => item.value > 0);
  const total = visibleItems.reduce((sum, item) => sum + item.value, 0);
  outputs.allocationTotalLabel.textContent = totalLabel;
  if (!total) {
    outputs.allocationChart.style.background =
      "conic-gradient(rgba(28, 22, 15, 0.08) 0deg 360deg)";
    outputs.allocationLegend.innerHTML = "";
    outputs.allocationTotal.textContent = formatCurrency(0);
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
      const percent = ((item.value / total) * 100).toFixed(1);
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
    fields[key].value = key === "jobName" ? t().defaultJobName : value;
  });
  lastLanguageDefaultName = t().defaultJobName;
  fields.useUzum.checked = false;
  fields.includeStorage.checked = false;
  fields.customSellingPrice.value = "";
  clearCategorySelections();
  syncUzumVisibility();
  updateCalculator();
}

function getCategoriesForModel(model) {
  return window.UZUM_DATA.categories.filter((category) => category.commission[model] != null);
}

function clearCategorySelections() {
  ui.levelSelects.forEach((select) => {
    select.innerHTML = "";
    select.value = "";
  });
}

function populateSelect(select, options, selectedValue) {
  const placeholder = `<option value="">${t().prompts.chooseCategory}</option>`;
  select.innerHTML =
    placeholder +
    options
      .map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`)
      .join("");
  select.value = options.includes(selectedValue) ? selectedValue : "";
}

function getActivePath(category) {
  return category[currentLang];
}

function refreshCategoryTree(preservedCategoryId = null) {
  const model = fields.uzumModel.value;
  const categories = getCategoriesForModel(model);
  const target = preservedCategoryId
    ? categories.find((category) => category.id === preservedCategoryId)
    : null;
  const desiredPath = target ? getActivePath(target) : null;
  const currentSelections = ui.levelSelects.map((select) => select.value);
  const nextSelections = desiredPath || currentSelections;

  for (let level = 0; level < ui.levelSelects.length; level += 1) {
    const prefix = nextSelections.slice(0, level).filter(Boolean);
    const candidates = categories.filter((category) => {
      const path = getActivePath(category);
      return prefix.every((item, index) => path[index] === item);
    });
    const options = [...new Set(candidates.map((category) => getActivePath(category)[level]).filter(Boolean))];
    const wrap = ui.uzumLevelWraps[level];
    const select = ui.levelSelects[level];
    const shouldShow = level === 0 || prefix.length === level;

    if (!shouldShow || options.length === 0) {
      wrap.classList.add("is-hidden");
      select.innerHTML = "";
      select.value = "";
      continue;
    }

    wrap.classList.remove("is-hidden");
    populateSelect(select, options, nextSelections[level]);
    nextSelections[level] = select.value;
  }
}

function getSelectedCategory() {
  const model = fields.uzumModel.value;
  const categories = getCategoriesForModel(model);
  const selectedValues = ui.levelSelects.map((select) => select.value).filter(Boolean);
  if (!selectedValues.length) {
    return null;
  }

  return (
    categories.find((category) => {
      const path = getActivePath(category);
      if (path.length !== selectedValues.length) {
        return false;
      }
      return selectedValues.every((value, index) => path[index] === value);
    }) || null
  );
}

function syncUzumVisibility() {
  const isEnabled = fields.useUzum.checked;
  ui.uzumFields.hidden = !isEnabled;
  ui.storageToggleWrap.classList.toggle("is-active", fields.includeStorage.checked);

  const isFbo = fields.uzumModel.value === "fbo";
  ui.storageToggleWrap.classList.toggle("is-hidden", !isEnabled || !isFbo);
  ui.turnoverWrap.classList.toggle(
    "is-hidden",
    !isEnabled || !isFbo || !fields.includeStorage.checked,
  );
}

function setPriceOutputs(values, unavailable = false) {
  const dash = "—";
  outputs.priceLean.textContent = unavailable ? dash : formatCurrency(values.lean);
  outputs.priceStandard.textContent = unavailable ? dash : formatCurrency(values.standard);
  outputs.pricePremium.textContent = unavailable ? dash : formatCurrency(values.premium);

  if (unavailable || !values.custom) {
    outputs.priceCustomLabel.textContent = "";
    return;
  }

  outputs.priceCustomLabel.textContent = values.customLabel || "";
}

function updateSelectedPriceCard() {
  Object.entries(ui.priceCards).forEach(([tier, card]) => {
    const isSelected = tier === selectedPriceTier;
    card.classList.toggle("selected", isSelected);
    card.setAttribute("aria-pressed", String(isSelected));
  });
}

function selectPriceTier(tier) {
  if (!ui.priceCards[tier]) {
    return;
  }
  selectedPriceTier = tier;
  updateSelectedPriceCard();
  updateCalculator();
}

function updateStatus(message) {
  outputs.uzumStatusText.textContent = message;
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
  const customSellingPrice = getOptionalPositiveNumber("customSellingPrice");

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
  const baseUnitCost = directUnitCost + failureBuffer + overheadCost;
  const machineBreakdown =
    electricityCost +
    depreciationCost +
    maintenanceCost +
    failureBuffer +
    overheadCost;

  let unitCost = baseUnitCost;
  let totalCost = unitCost * quantity;
  let unitWithTax = unitCost * (1 + taxPercent);
  let leanPrice = calculatePrice(unitCost, 20);
  let standardPrice = calculatePrice(unitCost, 35);
  let premiumPrice = calculatePrice(unitCost, 50);
  let customPrice = null;
  let customLabel = "";
  let activeCommission = 0;
  let commissionRate = 0;
  let logisticsFee = 0;
  let storageFee = 0;
  let statusMessage = t().prompts.categoryPrompt;
  let formulaLine = `${t().prompts.formulaBase}`;
  let breakdownChip = t().prompts.standardCostChip;
  let totalLabel = t().prompts.totalCostLabel;
  let selectedCategory = null;
  let volumeRaw = 0;
  let volumeRounded = 0;
  let isMarketplaceMode = fields.useUzum.checked;
  let priceUnavailable = false;

  outputs.categoryBreadcrumb.textContent = t().prompts.categoryFallback;
  outputs.volumeOutput.textContent = t().prompts.volumeFormat
    .replace("{rounded}", "0")
    .replace("{raw}", "0.000");
  outputs.tariffBadgeWrap.hidden = true;

  if (isMarketplaceMode) {
    selectedCategory = getSelectedCategory();
    const length = getNumber("uzumLength");
    const width = getNumber("uzumWidth");
    const height = getNumber("uzumHeight");

    if (!selectedCategory) {
      priceUnavailable = true;
      statusMessage = t().prompts.missingCategory;
    } else if (length <= 0 || width <= 0 || height <= 0) {
      priceUnavailable = true;
      outputs.categoryBreadcrumb.textContent = getActivePath(selectedCategory).join(" → ");
      statusMessage = t().prompts.invalidDimensions;
    } else {
      const model = fields.uzumModel.value;
      commissionRate = selectedCategory.commission[model];

      if (commissionRate == null) {
        priceUnavailable = true;
        statusMessage = t().prompts.categoryUnavailable;
      } else {
        volumeRaw = (length * width * height) / 1_000_000;
        volumeRounded = Math.ceil(volumeRaw);
        outputs.volumeOutput.textContent = interpolate(t().prompts.volumeFormat, {
          rounded: volumeRounded,
          raw: volumeRaw.toFixed(3),
        });
        outputs.categoryBreadcrumb.textContent = getActivePath(selectedCategory).join(" → ");
        outputs.tariffBadgeWrap.hidden = !selectedCategory.specialTariff;
        outputs.tariffBadge.textContent = t().prompts.specialTariff;

        if (model !== "dbs") {
          logisticsFee = Math.min(
            window.UZUM_DATA.logistics.baseFee +
              Math.max(volumeRounded - 1, 0) * window.UZUM_DATA.logistics.extraLiterFee,
            window.UZUM_DATA.logistics.maxFee,
          );
        }

        let storageLine = model === "fbo"
          ? t().prompts.storageOff
          : t().prompts.storageNotNeeded;

        if (model === "fbo" && fields.includeStorage.checked) {
          const turnoverDays = getNumber("turnoverDays");
          if (turnoverDays < 0) {
            priceUnavailable = true;
            statusMessage = t().prompts.invalidTurnover;
          } else {
            const storagePlan = selectedCategory.specialTariff
              ? window.UZUM_DATA.storage.special
              : window.UZUM_DATA.storage.standard;
            const activeTier = [...storagePlan.tiers]
              .reverse()
              .find((tier) => turnoverDays >= tier.minDays);
            const dailyStorageFee = Math.min(
              volumeRounded * (activeTier?.rate || 0),
              storagePlan.maxDailyFee,
            );
            const chargeableDays = Math.max(
              turnoverDays - selectedCategory.freeStorageDays,
              0,
            );
            storageFee = dailyStorageFee * chargeableDays;
            storageLine =
              storageFee > 0
                ? interpolate(t().prompts.storageSummary, {
                    dailyFee: formatCurrency(dailyStorageFee),
                    chargeableDays,
                    freeDays: selectedCategory.freeStorageDays,
                  })
                : interpolate(t().prompts.noStorageCharge, {
                    freeDays: selectedCategory.freeStorageDays,
                  });
          }
        }

        if (!priceUnavailable) {
          unitCost = baseUnitCost + logisticsFee + storageFee;
          totalCost = unitCost * quantity;
          unitWithTax = unitCost * (1 + taxPercent);
          leanPrice = calculateMarketplacePrice(unitCost, 20, commissionRate);
          standardPrice = calculateMarketplacePrice(unitCost, 35, commissionRate);
          premiumPrice = calculateMarketplacePrice(unitCost, 50, commissionRate);

          if ([leanPrice, standardPrice, premiumPrice].some((value) => value == null)) {
            priceUnavailable = true;
            statusMessage = t().prompts.impossiblePrice;
          } else {
            const priceMap = {
              lean: leanPrice,
              standard: standardPrice,
              premium: premiumPrice,
            };
            const activePrice =
              selectedPriceTier === "custom" && customSellingPrice
                ? customSellingPrice
                : priceMap[selectedPriceTier] || standardPrice;
            activeCommission = activePrice * commissionRate;
            statusMessage = interpolate(
              fields.includeStorage.checked && model === "fbo"
                ? t().prompts.readyStatusWithStorage
                : t().prompts.readyStatus,
              {
                model: model.toUpperCase(),
                category: getActivePath(selectedCategory).join(" → "),
                volume: interpolate(t().prompts.volumeFormat, {
                  rounded: volumeRounded,
                  raw: volumeRaw.toFixed(3),
                }),
                logistics: formatCurrency(logisticsFee),
                commissionPercent: formatPercent(commissionRate),
                storageLine,
              },
            );
            formulaLine =
              `${t().prompts.formulaBase}. ${t().prompts.formulaUzum}. ` +
              `${model.toUpperCase()} | ${formatPercent(commissionRate)}%`;
            breakdownChip = t().prompts.uzumCostChip;
            totalLabel = t().prompts.totalMarketplaceLabel;
          }
        }
      }
    }
  }

  if (!priceUnavailable && customSellingPrice) {
    const customProfit = calculateProfitFromSellingPrice(
      unitCost,
      customSellingPrice,
      isMarketplaceMode ? commissionRate : 0,
    );
    if (customProfit) {
      customPrice = customSellingPrice;
      customLabel = buildCustomPriceLabel(customProfit);
    }
  }

  outputs.unitCost.textContent = formatCurrency(unitCost);
  outputs.totalCost.textContent = formatCurrency(totalCost);
  outputs.unitWithTax.textContent = formatCurrency(unitWithTax);
  setPriceOutputs(
    {
      lean: leanPrice || 0,
      standard: standardPrice || 0,
      premium: premiumPrice || 0,
      custom: customPrice,
      customLabel,
    },
    priceUnavailable,
  );

  outputs.materialBreakdown.textContent = formatCurrency(materialCost);
  outputs.laborBreakdown.textContent = formatCurrency(laborCost);
  outputs.hardwareBreakdown.textContent = formatCurrency(hardwareCost);
  outputs.packagingBreakdown.textContent = formatCurrency(packagingCost);
  outputs.machineBreakdown.textContent = formatCurrency(machineBreakdown);
  outputs.logisticsBreakdown.textContent = formatCurrency(logisticsFee);
  outputs.storageBreakdown.textContent = formatCurrency(storageFee);
  outputs.commissionBreakdown.textContent = formatCurrency(activeCommission);
  outputs.summaryBreakdown.textContent = formatCurrency(
    materialCost +
      laborCost +
      hardwareCost +
      packagingCost +
      machineBreakdown +
      logisticsFee +
      storageFee +
      activeCommission,
  );
  outputs.formulaLine.textContent = formulaLine;
  outputs.breakdownModeChip.textContent = breakdownChip;

  updateStatus(statusMessage);

  buildAllocationSegments(
    [
      { label: t().texts.breakdownMaterialLabel, value: materialCost, color: "#bf5a2b" },
      { label: t().texts.breakdownLaborLabel, value: laborCost, color: "#2563eb" },
      { label: t().texts.breakdownHardwareLabel, value: hardwareCost, color: "#dc2626" },
      { label: t().texts.breakdownPackagingLabel, value: packagingCost, color: "#0891b2" },
      { label: t().texts.breakdownMachineLabel, value: machineBreakdown, color: "#0f766e" },
      { label: t().texts.breakdownLogisticsLabel, value: logisticsFee, color: "#7c3aed" },
      { label: t().texts.breakdownStorageLabel, value: storageFee, color: "#d97706" },
      { label: t().texts.breakdownCommissionLabel, value: activeCommission, color: "#ec4899" },
    ],
    totalLabel,
  );
}

function setLanguage(lang) {
  const selectedCategoryId = getSelectedCategory()?.id || null;
  const currentJobName = fields.jobName.value.trim();
  const currentDefault = lastLanguageDefaultName;
  currentLang = lang;
  setLocalizedText();

  if (!currentJobName || currentJobName === currentDefault) {
    fields.jobName.value = t().defaultJobName;
  }
  lastLanguageDefaultName = t().defaultJobName;

  refreshCategoryTree(selectedCategoryId);
  syncUzumVisibility();
  updateCalculator();
}

document.getElementById("calculator-form").addEventListener("input", updateCalculator);
document.getElementById("reset-defaults").addEventListener("click", resetDefaults);
fields.materialType.addEventListener("change", () => {
  fields.materialCostPerKg.value = materialDefaults[fields.materialType.value];
  updateCalculator();
});
fields.useUzum.addEventListener("change", () => {
  syncUzumVisibility();
  updateCalculator();
});
fields.includeStorage.addEventListener("change", () => {
  syncUzumVisibility();
  updateCalculator();
});
fields.uzumModel.addEventListener("change", () => {
  refreshCategoryTree();
  syncUzumVisibility();
  updateCalculator();
});
ui.levelSelects.forEach((select, index) => {
  select.addEventListener("change", () => {
    for (let offset = index + 1; offset < ui.levelSelects.length; offset += 1) {
      ui.levelSelects[offset].value = "";
    }
    refreshCategoryTree();
    updateCalculator();
  });
});
ui.langUz.addEventListener("click", () => setLanguage("uz"));
ui.langRu.addEventListener("click", () => setLanguage("ru"));
Object.entries(ui.priceCards).forEach(([tier, card]) => {
  card.addEventListener("click", () => selectPriceTier(tier));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectPriceTier(tier);
    }
  });
});
fields.customSellingPrice.addEventListener("click", (event) => {
  event.stopPropagation();
});
fields.customSellingPrice.addEventListener("input", () => {
  if (fields.customSellingPrice.value.trim() && selectedPriceTier !== "custom") {
    selectedPriceTier = "custom";
    updateSelectedPriceCard();
  }
  updateCalculator();
});

setLocalizedText();
refreshCategoryTree();
syncUzumVisibility();
updateSelectedPriceCard();
updateCalculator();
