import { SanadGrievanceLetter, CourtChecklistItem } from '../types/legal';

export const SANAD_GRIEVANCE_LETTER: SanadGrievanceLetter = {
  referenceCode: "DCA-20260802114",
  previousRejectedRef: "DCA-20260615063",
  labourComplaintRef: "REF2603150080",
  courtCaseNo: "1005/1215/2026",
  submissionDate: "2026-08-02",
  allegedDesertionDate: "2026-03-30",
  workerName: "حبيب الرحمن عبد البارك (معروف - Maruf)",
  civilId: "103352388",
  workPermitNo: "10706994",
  employerName: "شركة اليرموك الحديثة للتجارة ش.م.م",
  commercialRegNo: "1834525",
  ticketAmountOMR: 148.000,
  subjectAr: "طلب عاجل لإلغاء وشطب بلاغ ترك العمل (الهروب) الكيدي رقم (DCA-20260802114) لوجود نزاع عمالي ودعوى قضائية سابقة ومستمرة",
  bodyAr: `إلى الفاضل / مدير دائرة متابعة بلاغات ترك العمل والتفتيش العمالي المحترم
وزارة العمل — سلطنة عمان
نسخة إلى: فضيلة قاضي الدائرة العمالية بالمحكمة الابتدائية ببركاء (الدعوى رقم 1005/1215/2026)

السلام عليكم ورحمة الله وبركاته،،

الموضوع: تظلم عاجل وطلب إلغاء بلاغ ترك العمل الكيدي رقم (DCA-20260802114)

أتقدم أنا العامل / حبيب الرحمن عبد البارك، بنجلاديشي الجنسية، حامل البطاقة الشخصية رقم (103352388) ورقم تصريح العمل (10706994)، بهذا التظلم الرسمي طالباً شطب وإلغاء بلاغ ترك العمل المقيد ضدي من قبل صاحب العمل (شركة اليرموك الحديثة للتجارة ش.م.م - س.ت: 1834525) بتاريخ 02/08/2026م، وذلك للأسباب القانونية والموضوعية التالية:

١. أسبقية قيد النزاع العمالي الرسمي:
قمت بتسجيل شكوى عمالية رسمية لدى دائرة تسوية منازعات العمل بوزارة العمل برقم (REF2603150080) بتاريخ 15/03/2026م ضد المنشأة للمطالبة بمستحقات 11 عاماً، في حين أن الشركة تدعي كذباً في بلاغها اللاحق أنني تركت العمل بتاريخ 30/03/2026م (أي بعد تاريخ لجوئي للوزارة بـ 15 يوماً!). فكيف يعقل لعامل يتابع شكواه الرسمية أن يُسجل ضده بلاغ هروب؟

٢. الحظر القانوني لاتخاذ إجراءات ضد العامل الشاكي:
تنص لوائح وزارة العمل الصريحة على أنه: "لا يسمح لصاحب العمل بإنهاء خدمة العامل أو اتخاذ أي إجراء ضده بسبب تقديمه شكوى إلى وزارة العمل". ويعد تسجيل البلاغ في ظل وجود شكوى قائمة مخالفة صريحة للنظام.

٣. سابقة رفض الوزارة للبلاغ الأول لنفس السبب:
سبق للشركة أن تقدمت ببلاغ هروب أول برقم (DCA-20260615063) بتاريخ 15/06/2026م، وقامت وزارة العمل الموقرة بـ رفضه (Rejected) لثبوت كيديته ووجود النزاع العمالي، إلا أن الشركة تحايلت وأعادت تقديمه في 02/08/2026 وسددت قيمة تذكرة طرد (148 ريالاً) للضغط عليّ والتخلص مني.

٤. الدعوى متداولة أمام المحكمة الابتدائية ببركاء:
النزاع محال رسمياً إلى القضاء بالدعوى رقم (1005/1215/2026) لدى الدائرة فردي مدني بمحكمة بركاء، وقد حضرت الجلسة القضائية المحددة في 29/06/2026م وأنا متواجد داخل السلطنة وملتزم بكافة الإجراءات.

الطلبات:
بناءً على ما تقدم، أطلب من عدالتكم:
١. شطب وإلغاء بلاغ ترك العمل رقم (DCA-20260802114) نهائياً من سجلات الوزارة والنظام الإلكتروني.
٢. إعادة الوضع القانوني لحالته الطبيعية ووقف أي إجراءات ترحيل أو تعميم إلى حين الفصل النهائي في الدعوى القضائية العمالية.
٣. تمكيني من نقل الكفالة (التنازل) إلى صاحب عمل آخر نظراً لتعسف الكفيل وامتناعه عن صرف راتبي.`,
  groundsAr: [
    "قيد الشكوى العمالية REF2603150080 في 15/03/2026 يسبق تاريخ الهروب المزعوم (30/03/2026)",
    "حظر إنهاء خدمة أو معاقبة العامل بسبب الشكوى وفق تعليمات وزارة العمل",
    "سابقة رفض البلاغ الأول DCA-20260615063 في 15/06/2026",
    "وجود دعوى قضائية مقيدة برقم 1005/1215/2026 بمحكمة بركاء وحضور العامل جلساتها",
    "سداد تذكرة 148 ريالاً تم بسوء نية للتهرب من مستحقات 11 عاماً البالغة أكثر من 7,600 ريال"
  ],
  demandsAr: [
    "إلغاء بلاغ ترك العمل (DCA-20260802114) فوراً وشطبه من النظام الإلكتروني",
    "وقف كافة إجراءات التسفير القسري حتى حسم النزاع القضائي",
    "منح ترخيص نقل خدمات العامل (تنازل) لصاحب عمل آخر",
    "تسليم جواز السفر الأصلي المحتجز تعسفياً"
  ]
};

export const COURT_CHECKLIST_ITEMS: CourtChecklistItem[] = [
  // Section 1: Personal Identity & Court Filings
  {
    id: "check-1-civil-id",
    section: "1. Personal Identity & Court Filings",
    title: "Original Resident Card (Civil ID: 103352388)",
    arabicTitle: "أصل بطاقة المقيم (الرقم المدني: 103352388)",
    description: "Physical card and clean printed copy. Work permit reference: 10706994. Valid active status.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-2-passport-note",
    section: "1. Personal Identity & Court Filings",
    title: "Passport Copies & Withholding Note",
    arabicTitle: "نسخ جواز السفر ومذكرة إثبات احتجازه لدى الكفيل",
    description: "Printed copy of passport and visa. Formal statement indicating original passport is illegally held by employer.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-3-mol-slip",
    section: "1. Personal Identity & Court Filings",
    title: "Ministry of Labour Complaint Slip",
    arabicTitle: "إيصال قيد الشكوى العمالية بوزارة العمل (REF2603150080)",
    description: "Official printout for Complaint Ref: REF2603150080 registered on March 15, 2026.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-4-court-summons",
    section: "1. Personal Identity & Court Filings",
    title: "Barka Court Registration Summons",
    arabicTitle: "إشعار قيد الدعوى بمحكمة بركاء (1005/1215/2026)",
    description: "Official SMS / Judicial Council printout for Case No: 1005/1215/2026.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-5-arabic-dossier",
    section: "1. Personal Identity & Court Filings",
    title: "3-Page Arabic Court Dossier",
    arabicTitle: "مذكرة الدعوى القضائية العربية ومطالبة الأجور",
    description: "Official court petition statement citing Oman Labor Law Articles 37, 55, 58, 66.",
    requiredCopies: 3,
    status: "verified"
  },

  // Section 2: Wage Protection System (WPS) & Financial Proofs
  {
    id: "check-6-bank-muscat",
    section: "2. Wage Protection System (WPS) & Financial Proofs",
    title: "Bank Muscat WPS Statements (2022–2026)",
    arabicTitle: "كشوفات حساب بنك مسقط ونظام حماية الأجور (250 ر.ع)",
    description: "Official bank statements proving 250 OMR basic monthly wage deposits, disproving 60 OMR contract claim.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-7-deductions-loan",
    section: "2. Wage Protection System (WPS) & Financial Proofs",
    title: "Unauthorized Deduction Records ('Loan AC')",
    arabicTitle: "سجلات الاستقطاعات غير القانونية (قرض وهمي، حجر كورونا 600 ر.ع)",
    description: "Bank and ledger line items showing 50 OMR/mo salary cuts, 600 OMR COVID quarantine penalty, and 217 OMR Ooredoo bill cuts.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-8-deposit-slips",
    section: "2. Wage Protection System (WPS) & Financial Proofs",
    title: "Daily Bank Sales Deposit Receipts",
    arabicTitle: "إيصالات إيداع مبيعات الفرع اليومية الممهورة باسم العامل",
    description: "Stamped deposit receipts bearing Plaintiff's Civil ID, proving personal cash handling and branch sales deposits.",
    requiredCopies: 3,
    status: "verified"
  },

  // Section 3: Managerial Role & Operational Proofs
  {
    id: "check-9-software-ledgers",
    section: "3. Managerial Role & Operational Proofs",
    title: "Accounting Software Ledgers (250 DR)",
    arabicTitle: "كشوفات برنامج المحاسبة الصادرة بحساب 250 DR",
    description: "Internal accounting software screenshots showing salary recorded under 250 DR and invoices issued under user ID.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-10-branch-sales",
    section: "3. Managerial Role & Operational Proofs",
    title: "Branch Sales Records (Up to 53,000 OMR/mo)",
    arabicTitle: "سجلات مبيعات فرع بركاء القياسية (حتى 53,000 ر.ع شهرياً)",
    description: "Monthly performance logs showing Barka branch revenue management from 2018 to 2026.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-11-customer-sheets",
    section: "3. Managerial Role & Operational Proofs",
    title: "Signed Customer Running Balance Sheets",
    arabicTitle: "كشوفات الحساب الجارية الموقعة للزبائن",
    description: "Ledger documents containing Plaintiff's signature, proving managerial credit control over branch customer accounts.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-12-designation-mismatch",
    section: "3. Managerial Role & Operational Proofs",
    title: "Designation Mismatch Proofs",
    arabicTitle: "إثبات مخالفة المهنة (نادل / عامل شحن مقابل مدير فرع 8 سنوات)",
    description: "Documentation showing 'Waiter/Loader' visa title contrasted against actual 8-year role as Branch Manager.",
    requiredCopies: 3,
    status: "verified"
  },

  // Section 4: Rebuttal Evidence & Employer Breaches
  {
    id: "check-13-password-tampering",
    section: "4. Rebuttal Evidence & Employer Breaches",
    title: "Software Password Tampering Evidence",
    arabicTitle: "إثبات تغيير كلمة سر النظام واصطناع عجز 2,200 ريال أثناء الإجازة",
    description: "Logs showing management changed master password during Plaintiff's leave to create banoat 2,200 OMR cash shortage.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-14-ooredoo-notice",
    section: "4. Rebuttal Evidence & Employer Breaches",
    title: "Ooredoo Official Legal Notice (217 OMR)",
    arabicTitle: "إنذار مكتب المحاماة الرسمي لشركة أوريدو (217 ر.ع)",
    description: "Formal notice for internet line registered under Civil ID for company branch operational use.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-15-medical-cert",
    section: "4. Rebuttal Evidence & Employer Breaches",
    title: "Medical Leave Certificate (27/01/2026)",
    arabicTitle: "شهادة الإجازة المرضية المعتمدة (27/01/2026)",
    description: "Doctor-certified medical leave slip protected under Article 66 of Oman Labor Law.",
    requiredCopies: 3,
    status: "verified"
  },
  {
    id: "check-16-protest-letters",
    section: "4. Rebuttal Evidence & Employer Breaches",
    title: "Written Objection & Protest Letters",
    arabicTitle: "خطابات الاعتراض والاحتجاج المكتوبة المسلمة للإدارة",
    description: "Copies of formal written protest letters objecting to illegal wage cuts and arbitrary demotion.",
    requiredCopies: 3,
    status: "verified"
  }
];
