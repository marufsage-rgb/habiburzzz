import { CaseMetadata, EvidenceDocument, FinancialClaim, DesertionTimelinePoint, CourtSpokenPhrase } from '../types/legal';

export const CASE_METADATA: CaseMetadata = {
  workerNameAr: "حبيب الرحمن عبد البارك",
  workerNameEn: "Habibur Rahman Abdul Barak",
  workerNickname: "معروف (Maruf)",
  civilId: "103352388",
  workPermitNo: "10706994",
  passportStatus: "محتجز لدى صاحب العمل بصفة غير قانونية منذ الوصول",
  nationalityAr: "بنجلاديشي",
  nationalityEn: "Bangladeshi",
  employerNameAr: "شركة اليرموك الحديثة للتجارة ش.م.م",
  employerNameEn: "Al Yarmook Modern Trading LLC",
  commercialRegNo: "1834525",
  employmentStartDate: "2015-07-01",
  serviceYears: 11,
  actualMonthlySalaryOMR: 250.000,
  actualCommissionOMR: 50.000,
  contractRegisteredSalaryOMR: 60.000,
  molComplaintRef: "REF2603150080",
  molComplaintDate: "2026-03-15",
  molNextHearingDate: "2026-09-14",
  sjcCaseNo: "1005/1215/2026",
  sjcCourtNameAr: "المحكمة الابتدائية ببركاء - الدائرة فردي مدني",
  sjcHearingDate: "2026-06-29",
  desertionRefApproved: "DCA-20260802114",
  desertionSubmitDate: "2026-08-02",
  desertionAllegedDate: "2026-03-30",
  claimedShortageOMR: 2200.000,
};

export const EVIDENCE_DOCUMENTS: EvidenceDocument[] = [
  {
    id: "exhibit-1-subledger",
    exhibitNumber: 1,
    titleAr: "كشف الحساب الفرعي لنظام المحاسبة (Sub-Ledger MARUF LOAN A/C)",
    titleEn: "Company Accounting Sub-Ledger Statement (MARUF LOAN A/C)",
    category: "accounting",
    categoryLabelAr: "أدلة النظام المحاسبي وتفنيد العجز",
    documentDate: "2021-01-01 إلى 2024-07-06",
    referenceCode: "Voucher/Ledger MARUF-LOAN",
    summaryAr: "كشف رسمي صادر من البرنامج المحاسبي لشركة اليرموك (محمد حنيف لمواد البناء والألمنيوم). يثبت قيام الإدارة بدس سلفيات موظفين آخرين (مثل SHAJAHAN بمبلغ 300 و250 ر.ع، وHAFEZ بمبلغ 100 ر.ع) في حساب العامل لتضخيم رصيد المديونية صورياً وإجبار العامل على سداد مبالغ تذاكر الطيران والحجر الصحي (600 ر.ع) بخصم 50 ر.ع شهرياً.",
    shortageRebuttalAr: "يفند هذا الكشف قطيعاً ادعاء الشركة بوجود عجز قدره 2,200 أو 3,000 ريال؛ حيث يظهر الكشف في 06/07/2024 أن الرصيد النهائي كان دائناً لصالح العامل بمبلغ (21.80 OMR Credit)، مما يثبت تصفية الحسابات سابقاً، وأن العجز المزعوم لاحقاً تم افتعاله بعد تغيير كلمة سر النظام (Master Password) أثناء إجازة العامل.",
    legalArgumentAr: "مخالفة صريحة للمادتين 56 و59 من قانون العمل العماني (مرسوم سلطاني 53/2023) التي تحظر استقطاع مبالغ من أجر العامل دون إذن كتابي رسمي أو حكم قضائي، وبطلان تحميل العامل ديون تجارية أو سلفيات تخص عمالاً آخرين.",
    legalArticles: ["المادة 56 - حظر استقطاع الأجور دون مسوغ", "المادة 59 - تحديد الحد الأقصى للاستقطاعات بـ 15% إلى 25%"],
    keyFigures: [
      { label: "رصيد دائن لصالح العامل (06/07/2024)", value: "21.800 ر.ع Credit", isHighlighted: true },
      { label: "سلفيات مدسوسة (SHAJAHAN & HAFEZ)", value: "650.000 ر.ع" },
      { label: "خصم تذاكر وحجر كورونا الجائر", value: "600.000 ر.ع" },
      { label: "العجز الوهمي المزعوم من الشركة", value: "2,200.000 ر.ع (باطل)" }
    ],
    visualType: "subledger"
  },
  {
    id: "exhibit-2-desertion",
    exhibitNumber: 2,
    titleAr: "سجل بلاغات ترك العمل الإلكتروني بوزارة العمل (إثبات كيدية البلاغ)",
    titleEn: "Ministry of Labour Official Desertion Requests Record",
    category: "desertion",
    categoryLabelAr: "إثبات كيدية بلاغ الهروب وتناقضه",
    documentDate: "2026-06-15 و 2026-08-02",
    referenceCode: "DCA-20260802114 / DCA-20260615063",
    summaryAr: "مستند رسمي من بوابة وزارة العمل يوضح تقديم الكفيل لبلاغي هروب: الأول برقم DCA-20260615063 بتاريخ 15/06/2026 وقامت الوزارة برفضه (Rejected)، والثاني برقم DCA-20260802114 بتاريخ 02/08/2026 وتم قبوله بعد قيام الشركة بدفع تذكرة 148 ريال بزعم هروب العامل في 30/03/2026.",
    shortageRebuttalAr: "التاريخ المزعوم لهروب العامل (30/03/2026) يكذبه واقع الحال الرسمي؛ فالشخص قام بقيد شكواه العمالية الرسمية (REF2603150080) قبل ذلك بتاريخ 15/03/2026 وكان يحضر جلسات تسوية النزاع ويمتلك إشعارات المحكمة برقم 1005/1215/2026. البلاغ كيدي ومقايضة صريحة للتهرب من مستحقات 11 عاماً.",
    legalArgumentAr: "تنص المادة (4) والتعليمات الوزارية بوزارة العمل على أنه: 'لا يحق لصاحب العمل إنهاء خدمة العامل أو اتخاذ أي إجراء ضده بسبب تقديمه شكوى لوزارة العمل'. كما أن قيد بلاغ هروب في ظل وجود نزاع عمالي قائم يعد باطلاً بطلاناً مطلقاً وجريمة بلاغ كاذب.",
    legalArticles: ["تعليمات حظر الإجراءات الانتقامية ضد الشاكي", "المادة 40 - بطلان البلاغات الكيدية وقت النزاع القائم"],
    keyFigures: [
      { label: "تاريخ الشكوى العمالية الأصلية", value: "15/03/2026 (أسبق من الادعاء)", isHighlighted: true },
      { label: "البلاغ الأول المرفوض من الوزارة", value: "DCA-20260615063 (Rejected)" },
      { label: "البلاغ الكيدي اللاحق المقبول", value: "DCA-20260802114 (Approved)" },
      { label: "مبلغ التذكرة المودع من الكفيل للترحيل", value: "148.000 ر.ع" }
    ],
    visualType: "desertion"
  },
  {
    id: "exhibit-3-resident-cards",
    exhibitNumber: 3,
    titleAr: "أدلة صور بطاقات المقيم وتغيير التأشيرة (إثبات التلاعب بالمهن والراتب)",
    titleEn: "5 Official Resident Cards & Visa Mutation Evidence",
    category: "visa",
    categoryLabelAr: "التلاعب بالمهنة والتأشيرة والتعمين",
    documentDate: "2018م إلى 2025م",
    referenceCode: "Visa No. 98123291 / Civil ID 103352388",
    summaryAr: "صور أصلية متسلسلة لبطاقات الإقامة وتأشيرة العمل الصادرة من شرطة عمان السلطانية: بطاقة 2018 (نادل طعام)، بطاقة 2019 (نادل طعام)، بطاقة 2025 (عامل شحن وتفريغ)، بالإضافة إلى البطاقة الذكية الحالية ورخصة القيادة العمانية السارية لمدة 4 سنوات.",
    shortageRebuttalAr: "يثبت المستند أن الشركة استغلت العامل بتسجيله صورياً في مهن متدنية (نادل ثم عامل شحن براتب صوري 60 ر.ع) للتهرب من نسب التعمين المقررة وتفادي سداد مكافأة نهاية الخدمة، في حين أنه كان يباشر إدارة فرع بركاء والمبيعات ويحقق إيرادات تجاوزت 53,000 ريال شهرياً.",
    legalArgumentAr: "مخالفة لأحكام تشغيل العامل في غير المهنة المرخص له بها ومخالفة قوانين التعمين وتزوير بيانات عقد العمل الرسمي، واستخدام ذلك كوسيلة ضغط للتهديد بتنزيل الراتب إلى 70 বা 80 ريالاً بعد 11 عاماً من الإدارة.",
    legalArticles: ["المادة 29 - مطابقة العمل للمهنة المرخصة", "المادة 114 - عقوبات التلاعب ببيانات تصاريح العمل"],
    keyFigures: [
      { label: "المهنة المسجلة بالتأشيرة (صورياً)", value: "نادل طعام / عامل شحن" },
      { label: "العمل الفعلي الممارس (11 سنة)", value: "مدير فرع ومسؤول مبيعات أول", isHighlighted: true },
      { label: "أعلى مبيعات شهرية محققة بالفرع", value: "53,000.000 ر.ع" },
      { label: "صلاحية رخصة القيادة العمانية", value: "سارية (خبرة 4 سنوات)" }
    ],
    visualType: "cards"
  },
  {
    id: "exhibit-4-ooredoo",
    exhibitNumber: 4,
    titleAr: "إنذار شركة أوريدو القضائي وخصم فاتورة الإنترنت التجارية من الراتب",
    titleEn: "Ooredoo Legal Demand Notice & Salary Deduction Record",
    category: "penalty",
    categoryLabelAr: "استقطاع فواتير الشركة من الأجر الشخصي",
    documentDate: "2025-01-27",
    referenceCode: "Account No. 20721115 / Law Office Letter",
    summaryAr: "إنذار قانوني صادر من مكتب الدكتور خالد بن سالم الوهيبي (محامون ومستشارون قانونيون) للمطالبة بمبلغ 95.755 ر.ع لصالح شركة أوريدو. طلبت الشركة من العامل استخراج خط الإنترنت باسمه ورقم بطاقته لخدمة فرع ورشة الألمنيوم، ثم امتنعت عن سداد الفواتير أثناء إجازته، وخصمت 217 ريالاً إجمالياً من راتبه بالكامل.",
    shortageRebuttalAr: "يبرهن على منهجية الشركة في إلقاء التزاماتها التجارية ونفقاتها التشغيلية على عاتق العامل الضعيف، ثم خصمها من راتبه الأساسي الشحيح ومطالبته بمبالغ لم يستهلكها.",
    legalArgumentAr: "لا يجوز قانوناً تحميل الأجير نفقات التشغيل أو أدوات العمل ومرافقه وفقاً لقانون العمل، ويحق للعامل استرداد مبلغ 217 ريالاً المستقطع تعسفياً بدون وجه حق.",
    legalArticles: ["المادة 54 - التزام صاحب العمل بنفقات العمل التشغيلية", "المادة 58 - بطلان الخصم دون حكم قضائي"],
    keyFigures: [
      { label: "مبلغ المطالبة الأصلية", value: "95.755 ر.ع" },
      { label: "المبلغ الإجمالي المخصوم من الراتب", value: "217.000 ر.ع (شامل الغرامات)", isHighlighted: true },
      { label: "المستفيد الفعلي من الخدمة", value: "محل وورشة شركة اليرموك" }
    ],
    visualType: "ooredoo"
  },
  {
    id: "exhibit-5-bank-muscat",
    exhibitNumber: 5,
    titleAr: "كشوفات حساب بنك مسقط ونظام حماية الأجور (WPS)",
    titleEn: "Bank Muscat Salary & Wage Protection System (WPS) Proof",
    category: "bank",
    categoryLabelAr: "إثبات الراتب الحقيقي (250 ر.ع) وبطلان عقد الـ 60 ر.ع",
    documentDate: "2018 - 2026",
    referenceCode: "Bank Muscat Account Statement",
    summaryAr: "كشوفات الحساب المصرفي الصادرة من بنك مسقط تثبت إيداع الراتب الفعلي بانتظام بمبالغ تتراوح بين 200 إلى 250 ريال عماني شهرياً تحت بند Salary، مما يدحض العقد الصوري المودع بوزارة العمل براتب 60 ريالاً فقط.",
    shortageRebuttalAr: "العبرة في القانون بالأجر الفعلي المقبوض وليس بالرقم الصوري المسجل للتحايل. كشف الحساب يعد حجة قاطعة أمام الدائرة العمالية في احتساب مكافأة نهاية الخدمة وبدل الإجازات على أساس 250 ريالاً.",
    legalArgumentAr: "استقرار أحكام المحكمة العليا العمانية على أن كشوفات تحويل الرواتب البنكية (WPS) هي الفيصل في تحديد الأجر الفعلي، وتعتبر العقود المسجلة بأقل من ذلك عقوداً صورية باطلة جزئياً لصالح الأجير.",
    legalArticles: ["المادة 1 من قانون العمل - تعريف الأجر الفعلي والشامل", "المادة 53 - إلزامية الصرف عبر البنوك المعتمدة"],
    keyFigures: [
      { label: "الراتب الفعلي المثبت بالبنك", value: "250.000 ر.ع (شهرياً)", isHighlighted: true },
      { label: "الراتب الصوري المسجل بالعقد", value: "60.000 ر.ع (صوري باطل)" },
      { label: "العمولة الشهرية الموقوفة", value: "50.000 ر.ع" },
      { label: "فارق مكافأة نهاية الخدمة الضائع", value: "+1,554.000 ر.ع لصالح العامل" }
    ],
    visualType: "bank"
  },
  {
    id: "exhibit-6-court-summons",
    exhibitNumber: 6,
    titleAr: "إشعار وقيد الدعوى العمالية بالمحكمة الابتدائية ببركاء",
    titleEn: "Barka Preliminary Court Case Registration & Notice",
    category: "court",
    categoryLabelAr: "الإجراءات القضائية الرسمية بمجلس القضاء الأعلى",
    documentDate: "2026-06-29 و 2026-07-27",
    referenceCode: "1005/1215/2026",
    summaryAr: "إشعار رسمي من المجلس الأعلى للقضاء بقيد الطلب رقم 1005/1215/2026 لدى الدائرة فردي مدني بمحكمة بركاء لنظر النزاع بعد تعذر التسوية الودية، وتأكيد حق العامل في مباشرة دعواه أمام القضاء العادل.",
    shortageRebuttalAr: "لجوء العامل للقضاء وتثبيت حقه ينفي تماماً فرية الهروب؛ فالشخص موجود في سلطنة عمان ويتابع جلساته القضائية بشجاعة وأمانة مطالباً بحقه بعد 11 سنة خدمة.",
    legalArgumentAr: "حق التقاضي مكفول بموجب النظام الأساسي للدولة وقانون العمل، وتعتبر أي محاولة لإخراج العامل من البلاد قسراً أثناء تداول الدعوى بمثابة تعطيل لمجرى العدالة.",
    legalArticles: ["المادة 7 من قانون العمل - كفالة حق الشكوى والتقاضي", "المادة 120 - استمرار الإقامة لحين الفصل في الدعوى"],
    keyFigures: [
      { label: "رقم الدعوى القضائية", value: "1005/1215/2026", isHighlighted: true },
      { label: "المحكمة المختصة", value: "المحكمة الابتدائية ببركاء" },
      { label: "الدائرة", value: "فردي مدني / عمالي" }
    ],
    visualType: "court"
  }
];

export const FINANCIAL_CLAIMS: FinancialClaim[] = [
  {
    id: "claim-eosb",
    itemNumber: 1,
    categoryAr: "مكافأة نهاية الخدمة (EOSB / Gratuity)",
    categoryEn: "End of Service Benefits",
    detailsAr: "احتساب مكافأة نهاية الخدمة عن 11 سنة خدمة متواصلة من يوليو 2015 حتى الآن بناءً على الأجر الأساسي الحقيقي (250 ر.ع) وليس العقد الصوري (60 ر.ع).",
    calculationMethodAr: "أول 3 سنوات (15 يوماً/سنة = 45 يوماً = 375 ر.ع) + السنوات الـ 8 التالية (30 يوماً/سنة = 240 يوماً = 2,000 ر.ع)",
    amountOMR: 2375.000,
    legalArticleOman: "المادة 61 من قانون العمل (مرسوم سلطاني 53/2023)",
    evidenceRef: "كشوفات بنك مسقط + بطاقات الإقامة المتسلسلة (مستند 3 و 5)",
    isContestedByEmployer: true,
  },
  {
    id: "claim-covid-deduction",
    itemNumber: 2,
    categoryAr: "استرداد خصومات الحجر الصحي والتذاكر (كورونا)",
    categoryEn: "Refund of Illegal COVID Quarantine & Ticket Cuts",
    detailsAr: "استرداد مبلغ 600 ريال تم اقتطاعه تعسفياً بواقع 50 ريالاً شهرياً لمدة 12 شهراً بدعوى سداد نفقات السفر والحجر الصحي الإلزامي أثناء العودة من بنغلاديش في يناير 2021.",
    calculationMethodAr: "50.000 ر.ع × 12 شهراً = 600.000 ر.ع (مقيدة تحت بند قرض وهمي بالسجلات)",
    amountOMR: 600.000,
    legalArticleOman: "المادة 56 والمادة 59 (حظر تحميل الأجير مصاريف الإجراءات الوقائية)",
    evidenceRef: "كشف الحساب الفرعي MARUF LOAN A/C (مستند 1)",
    isContestedByEmployer: true,
  },
  {
    id: "claim-ooredoo-refund",
    itemNumber: 3,
    categoryAr: "استرداد مبالغ فاتورة أوريدو المخصومة من الراتب",
    categoryEn: "Refund of Ooredoo Business Line Deductions",
    detailsAr: "استرداد مبلغ 217 ريالاً استقطعته الشركة من الراتب لتسديد غرامات وفواتير خط الإنترنت الخاص بفرع الورشة والمستخرج برقم بطاقة العامل.",
    calculationMethodAr: "أصل المطالبة القضائية 95.755 ر.ع + غرامات ومصاريف سددت وخصمت بالكامل = 217.000 ر.ع",
    amountOMR: 217.000,
    legalArticleOman: "المادة 54 (تحمل صاحب العمل نفقات وأدوات التشغيل التجاري)",
    evidenceRef: "إنذار مكتب المحامي وشركة أوريدو (مستند 4)",
    isContestedByEmployer: true,
  },
  {
    id: "claim-unpaid-covid-salary",
    itemNumber: 4,
    categoryAr: "رواتب فترة الإغلاق القسري لكورونا (12 شهراً)",
    categoryEn: "Unpaid Salary for Global Lockdown Period",
    detailsAr: "العامل كان في إجازة مقررة وعلق ببلده قسراً بسبب إغلاق المطارات العالمية في 25/03/2020، وامتنعت الشركة عن صرف أي أجر أو إعانة طوال عام كامل.",
    calculationMethodAr: "12 شهراً × 200.000 ر.ع (الحد الأدنى لراتب الأساس) = 2,400.000 ر.ع",
    amountOMR: 2400.000,
    legalArticleOman: "القرارات الوزارية العليا الخاصة بحماية الأجور أثناء الجائحة",
    evidenceRef: "تذكرة العودة الملغاة بتاريخ 20/04/2020 وختم الدخول 11/01/2021",
    isContestedByEmployer: true,
  },
  {
    id: "claim-leave-salary",
    itemNumber: 5,
    categoryAr: "بدل الإجازات السنوية غير المصروفة (11 سنة)",
    categoryEn: "Unpaid Annual Leave Salaries (11 Years)",
    detailsAr: "طوال 11 سنة خدمة، لم تسلم الشركة العامل بدل الإجازة السنوية المقرر قانوناً (30 يوماً سنوياً بأجر شامل)، بل كانت توقف الراتب تماماً وقت السفر (No Work No Pay).",
    calculationMethodAr: "تقدير 11 سنة × 30 يوماً (أجر شامل 250 ر.ع) مع خصم التذاكر = 2,750.000 ر.ع",
    amountOMR: 2750.000,
    legalArticleOman: "المادة 58 والمادة 60 من قانون العمل (بدل الإجازة السنوية إلزامي)",
    evidenceRef: "سجلات الشركة الخالية من أي صرف لبدل الإجازة (مستند 1)",
    isContestedByEmployer: true,
  },
  {
    id: "claim-arbitrary-deductions-2026",
    itemNumber: 6,
    categoryAr: "فروقات الراتب والخصومات الأخيرة (أشهر 2026)",
    categoryEn: "Recent Salary Cuts & Dues (2026)",
    detailsAr: "قيام الشركة بتسليم العامل 80 ر.ع و77.300 ر.ع فقط وخصم 170 ر.ع شهرياً تحت مسميات كيدية (عجز زبائن، غياب مرضي رغم وجود إجازة طبية معتمدة).",
    calculationMethodAr: "استقطاع كيدي (100 ر.ع ديون زبائن + 50 ر.ع قسط قديم + 25 ر.ع غياب مرضي) = 175.000 ر.ع",
    amountOMR: 350.000,
    legalArticleOman: "المادة 66 (الحق في إجازة مرضية بأجر كامل بموجب شهادة طبية)",
    evidenceRef: "الشهادة الطبية المؤرخة 27/01/2026 + إيصال التحويل",
    isContestedByEmployer: true,
  }
];

export const DESERTION_TIMELINE: DesertionTimelinePoint[] = [
  {
    date: "15 مارس 2026",
    titleAr: "قيد الشكوى العمالية الأولى رسمياً (REF2603150080)",
    actor: "worker",
    descriptionAr: "تقدم العامل حبيب الرحمن بشكوى رسمية في دائرة تسوية منازعات العمل ضد شركة اليرموك للتجارة الحديثة للمطالبة بمستحقاته وتعديل أجره، وبدأت الإجراءات القانونية.",
    legalImpactAr: "سريان الحماية القانونية للعامل ومنع صاحب العمل من اتخاذ أي إجراء تعسفي أو إنهاء الخدمة وفقاً لتعليمات وزارة العمل.",
    proofBadge: "رقم الشكوى REF2603150080"
  },
  {
    date: "30 مارس 2026",
    titleAr: "التاريخ المزعوم لبلاغ الهروب الكيدي",
    actor: "employer",
    descriptionAr: "ادعت الشركة كذباً في بلاغها اللاحق أن العامل هرب في هذا التاريخ، بينما كان العامل متواجداً في مقر عمله ومراجعاً لجهات الاختصاص لشكواه المقيدة قبل هذا التاريخ بـ 15 يوماً!",
    legalImpactAr: "تناقض فاضح يدمر مصداقية البلاغ ويثبت صفته الكيدية أمام المحكمة.",
    proofBadge: "كيدية واضحة"
  },
  {
    date: "15 يونيو 2026",
    titleAr: "محاولة الكفيل الأولى لتقييد بلاغ هروب (مرفوض)",
    actor: "employer",
    descriptionAr: "قدمت الشركة بلاغ هروب برقم DCA-20260615063، وقامت وزارة العمل بـ رفضه (Rejected) بسبب وجود نزاع عمالي قائم وعدم صحة ادعاءات المنشأة.",
    legalImpactAr: "قرار إداري من الوزارة برفض البلاغ يثبت سابقة سوء نية صاحب العمل.",
    proofBadge: "البلاغ الأول: مرفوض Rejected"
  },
  {
    date: "29 يونيو 2026",
    titleAr: "جلسة المحكمة الابتدائية ببركاء (الدعوى 1005/1215/2026)",
    actor: "authority",
    descriptionAr: "انعقاد جلسة قضائية للنظر في مطالبات العامل العمالية بعد إحالة ملف النزاع من وزارة العمل إلى المجلس الأعلى للقضاء.",
    legalImpactAr: "تأكيد اختصاص المحكمة وسريان ولايتها القضائية على أطراف النزاع.",
    proofBadge: "جلسة قضائية رسمية"
  },
  {
    date: "02 أغسطس 2026",
    titleAr: "إعادة تقديم بلاغ الهروب الكيدي وسداد تذكرة الترحيل",
    actor: "employer",
    descriptionAr: "قامت الشركة بالتحايل وإعادة إدخال بلاغ برقم DCA-20260802114 وسداد 148 ريالاً كقيمة تذكرة طرد، مستغلة إجراءات إدارية، في محاولة لمنع العامل من حضور جلسات المحكمة.",
    legalImpactAr: "مخالفة جسيمة توجب إلغاء البلاغ فوراً والتعويض عن الضرر النفسي والمهني الذي لحق بالعامل.",
    proofBadge: "البلاغ الكيدي DCA-20260802114"
  },
  {
    date: "14 سبتمبر 2026",
    titleAr: "موعد الجلسة الحاسمة لتسوية النزاع العمالي",
    actor: "authority",
    descriptionAr: "جلسة محددة من قبل دائرة تسوية منازعات العمل لحسم النزاع وسماع بينات العامل ودفوعه بالأدلة المادية القاطعة.",
    legalImpactAr: "تقديم هذه المذكرة وحافظة المستندات لحسم القضية وإلزام الشركة بالوفاء.",
    proofBadge: "الجلسة الحاسمة القادمة"
  }
];

export const COURT_SPOKEN_PHRASES: CourtSpokenPhrase[] = [
  {
    id: "phrase-1",
    situationAr: "عند افتتاح الجلسة والتعريف بالصفة والوظيفة",
    arabicText: "سيدي القاضي، أنا خادم هذه الشركة بكل أمانة لمدة ١١ عاماً كمدير فرع ومسؤول مبيعات، ولست عاملاً عادياً أو نادلاً كما زوروا في الأوراق.",
    transliteration: "Sayyidi al-Qadi, ana khadim hadhihi al-sharika bikulli amanatin li-muddati 11 aaman ka-mudeer far' wa mas'ool mabi'at, wa lastu aamilan aadiyyan aw nadilan kama zawwaroo fil-awraq.",
    banglaMeaning: "মাননীয় বিচারক, আমি এই কোম্পানিতে ১১ বছর অত্যন্ত সততার সাথে ব্রাঞ্চ ম্যানেজার ও সেলস ইনচার্জ হিসেবে কাজ করেছি, সাধারণ লেবার বা ওয়েটার হিসেবে নয় যা তারা কাগজে জালিয়াতি করেছে।",
    englishMeaning: "Your Honor, I have faithfully served this company for 11 years as Branch Manager and Sales In-charge, not as an ordinary laborer or waiter as falsely registered.",
    importanceTipAr: "يرسخ في ذهن القاضي المركز الوظيفي الرفيع للعامل وأقدميته الطويلة."
  },
  {
    id: "phrase-2",
    situationAr: "الرد على بلاغ الهروب الكيدي (DCA-20260802114)",
    arabicText: "سيدي القاضي، بلاغ الهروب المقدم ضدي هو بلاغ كيدي وانتقامي؛ لأنني قيدت شكواي بالوزارة في ١٥ مارس ٢٠٢٦ قبل تاريخ هروبي المزعوم، والشركة تحاول ترحيلي لحرماني من مكافأة ١١ سنة.",
    transliteration: "Sayyidi al-Qadi, balagh al-huroob al-muqaddam daddi huwa balaghun kaydiyyun wa intiqamiyyun; li-annani qayyadtu shakwaya bil-wizarati fi 15 Maris 2026 qabla tareekh huroobiyal-maz'oom.",
    banglaMeaning: "মাননীয় বিচারক, আমার বিরুদ্ধে দেওয়া পলাতক (হুরুপ) অভিযোগটি সম্পূর্ণ মিথ্যা ও প্রতিশোধমূলক; কারণ তাদের দেখানো তারিখের আগেই ১৫ মার্চ আমি মন্ত্রণালয়ে মামলা করেছি।",
    englishMeaning: "Your Honor, the absconding report against me is malicious retaliation; I had already filed my labour dispute on March 15, 2026, well before their alleged desertion date.",
    importanceTipAr: "ينسف دعوى الهروب فوراً بالاستناد إلى أسبقية الشكوى الرسمية المقيدة."
  },
  {
    id: "phrase-3",
    situationAr: "الرد على فرية العجز المالي وسلفيات الآخرين",
    arabicText: "أطلب من المحكمة الموقرة فحص كشف الحساب؛ الشركة قامت بدس ديون وسلفيات عمال آخرين باسمي، والرصيد في نظامهم نفسه كان دائناً لصالحي بمبلغ ٢١ ريالاً، والعجز وهمي تم اصطناعه بعد تغيير كلمة سر النظام.",
    transliteration: "Atlubu min al-mahkamati al-mowaqqara fahs kashf al-hisab; al-sharika qamat bi-dassi duyoon wa salafiyyat ummalin aakhareena bi-ismi, wal-raseedu fi nizamiheem nafsahu kana da'inan li-salihi.",
    banglaMeaning: "আদালতের কাছে অনুরোধ কোম্পানির হিসাব খতিয়ে দেখা হোক; তারা অন্য কর্মচারীদের ঋণ আমার অ্যাকাউন্টে ঢুকিয়ে দিয়েছে, তাদের সফটওয়্যারেই আমার পাওনা ব্যালেন্স ছিল, শর্টেজ ভুয়া।",
    englishMeaning: "I request the Court to audit the ledger; the company inserted other employees' loans into my name, and their own software showed a credit in my favor. The shortage was fabricated.",
    importanceTipAr: "يوجه المحكمة مباشرة لمستند الإدانة المحاسبي المحفوظ في أوراق الدعوى."
  },
  {
    id: "phrase-4",
    situationAr: "إثبات الراتب الحقيقي (250 ر.ع) ودحض عقد الـ 60 ر.ع",
    arabicText: "كشوفات حسابي في بنك مسقط تثبت أن راتبي الفعلي هو ٢٥٠ ريالاً يودع شهرياً، وعقد الـ ٦٠ ريالاً عقد صوري مسجل دون علمي للتهرب من الرسوم ومكافأة نهاية الخدمة.",
    transliteration: "Kushoofatu hisabi fi Bank Muscat tuthbitu anna ratibiyal-fi'liyya huwa 250 Riyalan yooda'u shahriyyan, wa aqdul-60 Riyalan aqdun sooriyyun.",
    banglaMeaning: "ব্যাংক মাস্কাটের স্টেটমেন্ট প্রমাণ করে আমার আসল বেতন ২৫০ রিয়াল যা নিয়মিত জমা হতো, আর ৬০ রিয়ালের চুক্তিটি আমার অজান্তে জালিয়াতি করা হয়েছিল।",
    englishMeaning: "My Bank Muscat statements prove my real salary was 250 OMR deposited monthly; the 60 OMR contract is a sham registered without my knowledge to evade gratuity.",
    importanceTipAr: "يقدم الحجة الدامغة الملزمة بنص قانون حماية الأجور (WPS)."
  },
  {
    id: "phrase-5",
    situationAr: "المطالبة بجواز السفر المحتجز والتنازل",
    arabicText: "أطالب باسترداد جواز سفري الأصلي المحتجز لديهم بشكل غير قانوني، وتمكيني من نقل كفالتي (التنازل) لأتمكن من إعالة بناتي الأربع في ظل انقطاع راتبي.",
    transliteration: "Atlubu bi-istirdadi jawazi safariyal-asli al-muhtajazi ladayhim bi-shaklin ghayri qanooni, wa tamkeeni min naqli kafalati (al-tanazul).",
    banglaMeaning: "আমার বেআইনিভাবে আটকে রাখা মূল পাসপোর্ট ফেরত দেওয়া হোক এবং আমাকে ভিসা ট্রান্সফার (তানাজুল) দেওয়া হোক যাতে আমার চার মেয়ের মুখে খাবার তুলে দিতে পারি।",
    englishMeaning: "I demand the return of my illegally confiscated passport and authorization for a visa transfer (Tanazul) so I can feed my four daughters amidst this wage suspension.",
    importanceTipAr: "يجمع بين الشق الإنساني الملح والواجب القانوني الصارم لحماية كرامة العامل."
  }
];
