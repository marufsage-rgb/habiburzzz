import React from 'react';
import { CASE_METADATA, FINANCIAL_CLAIMS, EVIDENCE_DOCUMENTS, DESERTION_TIMELINE } from '../data/legalCaseData';
import { SANAD_GRIEVANCE_LETTER, COURT_CHECKLIST_ITEMS } from '../data/grievanceData';
import { SubLedgerFacsimile } from './facsimiles/SubLedgerFacsimile';
import { DesertionFacsimile } from './facsimiles/DesertionFacsimile';
import { ResidentCardsFacsimile } from './facsimiles/ResidentCardsFacsimile';
import { OoredooNoticeFacsimile } from './facsimiles/OoredooNoticeFacsimile';
import { BankMuscatWpsFacsimile } from './facsimiles/BankMuscatWpsFacsimile';
import { DriveEvidenceTablet } from './DriveEvidenceTablet';
import { Printer, X, CheckSquare, QrCode } from 'lucide-react';

interface PrintablePdfDossierProps {
  onClosePreview?: () => void;
  isPreviewMode?: boolean;
}

export const PrintablePdfDossier: React.FC<PrintablePdfDossierProps> = ({
  onClosePreview,
  isPreviewMode = false
}) => {
  const totalClaim = FINANCIAL_CLAIMS.reduce((acc, curr) => acc + curr.amountOMR, 0);

  const containerClasses = isPreviewMode
    ? "fixed inset-0 z-50 bg-stone-950/90 overflow-y-auto p-4 sm:p-6"
    : "print-only";

  return (
    <div className={containerClasses} dir="rtl">
      {isPreviewMode && (
        <div className="no-print max-w-4xl mx-auto mb-4 flex items-center justify-between bg-stone-800 text-white p-3 rounded-xl shadow-lg font-sans">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-bold text-amber-400">معاينة ملف PDF الرسمي المتكامل (A4 Judicial Dossier)</span>
            <span className="text-stone-400">· جاهز للطباعة والحفظ بصيغة PDF</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              <Printer className="w-4 h-4" />
              <span>طباعة الملف الآن (Print PDF)</span>
            </button>
            {onClosePreview && (
              <button
                onClick={onClosePreview}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Printable Document Sheet (Official Multi-Section Dossier) */}
      <div className="max-w-[210mm] mx-auto bg-white text-stone-900 p-8 sm:p-12 shadow-2xl rounded-none text-xs leading-relaxed space-y-12 font-arabic-calligraphy print:p-0 print:shadow-none">
        
        {/* ================= SECTION 1: FORMAL LEGAL MEMORANDUM ================= */}
        <div className="avoid-break space-y-6 border-b-2 border-stone-800 pb-10">
          <div className="text-center border-b-2 border-stone-800 pb-4 space-y-1 font-sans">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
              سلطنة عمان — وزارة العمل / المجلس الأعلى للقضاء
            </div>
            <div className="text-sm font-bold text-slate-900">
              دائرة تسوية منازعات العمل (مسقط) — المحكمة الابتدائية ببركاء (الدائرة فردي مدني / عمالي)
            </div>
            <h1 className="text-xl font-bold font-arabic-heading text-slate-950 pt-2">
              مذكرة مطالبة عمالية وبسط وقائع وتفنيد لبلاغ الهروب والعجز المالي
            </h1>
            <div className="flex justify-center gap-4 text-[10px] text-stone-600 pt-1 font-mono">
              <span>رقم الشكوى: <strong>{CASE_METADATA.molComplaintRef}</strong></span>
              <span>·</span>
              <span>رقم الدعوى: <strong>{CASE_METADATA.sjcCaseNo}</strong></span>
              <span>·</span>
              <span>الرقم المدني: <strong>{CASE_METADATA.civilId}</strong></span>
            </div>
          </div>

          {/* Litigants */}
          <div className="grid grid-cols-2 gap-4 bg-stone-50 p-3 rounded border border-stone-300 font-sans text-[11px]">
            <div>
              <strong className="block text-amber-900">المدعي (العامل):</strong>
              <p className="font-bold text-slate-900">{CASE_METADATA.workerNameAr} ({CASE_METADATA.workerNickname})</p>
              <p className="text-stone-600 font-mono">الرقم المدني: {CASE_METADATA.civilId} · تصريح العمل: {CASE_METADATA.workPermitNo}</p>
              <p className="text-stone-600">المهنة الفعلية: مدير فرع بركاء ومسؤول مبيعات أول (11 سنة خدمة)</p>
            </div>
            <div>
              <strong className="block text-slate-900">المدعى عليها (صاحب العمل):</strong>
              <p className="font-bold text-slate-900">{CASE_METADATA.employerNameAr}</p>
              <p className="text-stone-600 font-mono">السجل التجاري (CR): {CASE_METADATA.commercialRegNo}</p>
              <p className="text-stone-600">النشاط: تجارة وتصنيع مقاطع الألمنيوم والزجاج والحديد</p>
            </div>
          </div>

          {/* Core Facts & Defense */}
          <div className="space-y-3 text-justify text-[13px] leading-loose">
            <h2 className="font-bold text-sm font-arabic-heading text-slate-950 border-b border-stone-200 pb-1">
              أولاً: ملخص الوقائع والدفوع الجوهرية
            </h2>
            <p>
              1. التحق العامل بالعمل لدى المدعى عليها في يوليو 2015م وتولى في 2018م افتتاح وإدارة فرع الشركة في &quot;صناعية بركاء&quot; وحقق مبيعات قياسية بلغت <strong>53,000 ريال عماني شهرياً</strong>.
            </p>
            <p>
              2. <strong>بطلان بلاغ الهروب الكيدي رقم (DCA-20260802114):</strong> يدفع العامل ببطلان بلاغ الهروب؛ حيث إن العامل قيد شكواه الرسمية بوزارة العمل بتاريخ <strong>15/03/2026م</strong> برقم <code>{CASE_METADATA.molComplaintRef}</code> أي قبل تاريخ الهروب المزعوم (30/03/2026م) بنصف شهر! وتمنع تعليمات الوزارة تسجيل بلاغ هروب ضد عامل لديه شكوى قائمة، كما سبق للوزارة رفض البلاغ الأول (DCA-20260615063) في 15/06/2026م، وحضر العامل جلسة المحكمة ببركاء بتاريخ 29/06/2026م.
            </p>
            <p>
              3. <strong>تفنيد فرية العجز المالي المزعوم (2,200 বা 3,000 ريال):</strong> يثبت كشف الحساب الفرعي لنظام الشركة (MARUF LOAN A/C) أن رصيد العامل بتاريخ <strong>06/07/2024</strong> كان <strong>رصيداً دائناً بمبلغ (+21.80 OMR Credit)</strong>. كما قامت الشركة بدس سلفيات موظفين آخرين (شاه جهان وحافظ بإجمالي 650 ريالاً)، واستقطعت 600 ريال مصاريف حجر صحي وتذاكر، واصطنعت عجزاً بعد تغيير كلمة سر النظام أثناء إجازة العامل.
            </p>
            <p>
              4. <strong>ثبوت الراتب الحقيقي (250 ريالاً):</strong> العبرة في القانون بالأجر الفعلي المحول دورياً عبر بنك مسقط ونظام حماية الأجور (WPS) وليس بالعقد الصوري المسجل بـ 60 ريالاً للتحايل على نسب التعمين وحرمان العامل من مكافأة نهاية الخدمة.
            </p>
          </div>
        </div>

        {/* ================= SECTION 2: SANAD GRIEVANCE LETTER (DESERTION) ================= */}
        <div className="page-break avoid-break space-y-5 border-b-2 border-stone-800 pb-10">
          <div className="text-center border-b border-stone-300 pb-3 font-sans">
            <span className="text-[10px] text-stone-500 font-bold uppercase tracking-wider block">
              صيغة التظلم المعتمدة للتقديم عبر مكاتب سند وبوابة وزارة العمل
            </span>
            <h2 className="text-base font-bold text-slate-900 font-arabic-heading mt-1">
              طلب عاجل وتظلم من بلاغ ترك العمل الكيدي رقم (DCA-20260802114)
            </h2>
            <div className="text-[10px] text-stone-600 font-mono mt-1">
              Grievance of Communication Left to Work (Desertion Appeal)
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-lg border border-stone-300 text-stone-800 whitespace-pre-line text-[12px] leading-loose text-justify font-arabic-calligraphy">
            {SANAD_GRIEVANCE_LETTER.bodyAr}
          </div>

          <div className="flex justify-between items-center text-[11px] font-sans pt-2 border-t border-stone-200">
            <span>العامل المتظلم: <strong>{CASE_METADATA.workerNameAr}</strong></span>
            <span className="font-mono">Civil ID: {CASE_METADATA.civilId} · Phone: 96522902</span>
          </div>
        </div>

        {/* ================= SECTION 3: BARKA COURT EVIDENCE CHECKLIST ================= */}
        <div className="page-break avoid-break space-y-4 border-b-2 border-stone-800 pb-10 font-sans text-xs">
          <div className="flex justify-between items-center border-b-2 border-stone-800 pb-2">
            <div>
              <h2 className="text-sm font-bold text-slate-900 font-arabic-heading">
                قائمة المستندات والوثائق المعتمدة لجلسة المحكمة الابتدائية ببركاء
              </h2>
              <p className="text-[10px] text-stone-500 font-mono">Barka Primary Court — Master Evidence Checklist</p>
            </div>
            <span className="font-mono text-[10px] bg-stone-100 px-2 py-1 rounded border">
              Case: 1005/1215/2026 · 3 Copies Each
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            {COURT_CHECKLIST_ITEMS.map((item) => (
              <div key={item.id} className="p-2.5 rounded bg-stone-50 border border-stone-200 flex items-start gap-2">
                <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <strong className="block text-slate-900 text-[11px]">{item.title}</strong>
                  <div className="text-amber-900 text-[10px] font-arabic-heading">{item.arabicTitle}</div>
                  <p className="text-[10px] text-stone-600 leading-tight">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 4: DRIVE EVIDENCE TABLET & QR CODE ================= */}
        <div className="page-break avoid-break space-y-4 border-b-2 border-stone-800 pb-10 font-sans">
          <div className="flex justify-between items-center border-b border-stone-800 pb-2">
            <div>
              <h2 className="text-sm font-bold text-slate-900 font-arabic-heading">
                أرشيف الأدلة والمستندات السحابية (Google Drive QR Code Hub)
              </h2>
              <p className="text-[10px] text-stone-500 font-mono">Cloud Evidence Archive & Digital Ledger Links</p>
            </div>
            <span className="text-[10px] text-emerald-700 font-bold font-mono">2018 - 2026 Records Verified</span>
          </div>

          <DriveEvidenceTablet lang="ar" />
        </div>

        {/* ================= SECTION 5: EXHIBITS 1 & 2 FACSIMILES ================= */}
        <div className="page-break avoid-break space-y-5 border-b-2 border-stone-800 pb-10">
          <div className="border-b border-stone-800 pb-2 flex justify-between items-center font-sans">
            <span className="font-bold text-sm text-slate-900">
              المستند رقم (1) ورقم (2): كشف الحساب الفرعي وسجل بلاغات الهروب
            </span>
            <span className="text-[10px] font-mono text-stone-500">Exhibits 1 & 2 Facsimiles</span>
          </div>

          <SubLedgerFacsimile />
          <DesertionFacsimile />
        </div>

        {/* ================= SECTION 6: EXHIBITS 3 & 4 FACSIMILES ================= */}
        <div className="page-break avoid-break space-y-5 border-b-2 border-stone-800 pb-10">
          <div className="border-b border-stone-800 pb-2 flex justify-between items-center font-sans">
            <span className="font-bold text-sm text-slate-900">
              المستند رقم (3) ورقم (4): بطاقات المقيم وإنذار أوريدو
            </span>
            <span className="text-[10px] font-mono text-stone-500">Exhibits 3 & 4 Facsimiles</span>
          </div>

          <ResidentCardsFacsimile />
          <OoredooNoticeFacsimile />
          <BankMuscatWpsFacsimile />
        </div>

        {/* ================= SECTION 7: FINANCIAL AUDIT & FINAL COURT PRAYERS ================= */}
        <div className="page-break avoid-break space-y-6 font-sans">
          <div className="border-b-2 border-stone-800 pb-2 flex justify-between items-center">
            <h2 className="text-sm font-bold text-slate-900 font-arabic-heading">
              جدول تصفية المطالبات المالية العمالية الإجمالية والطلبات الختامية
            </h2>
            <span className="text-[10px] font-mono text-stone-500">Financial Audit & Formal Prayers</span>
          </div>

          <table className="w-full text-right border-collapse border border-stone-300 text-xs">
            <thead className="bg-stone-100 font-bold border-b border-stone-300">
              <tr>
                <th className="p-2 border-l border-stone-300 text-center">م</th>
                <th className="p-2 border-l border-stone-300">بند المطالبة</th>
                <th className="p-2 border-l border-stone-300">الأساس الحسابي والقانوني</th>
                <th className="p-2 text-center">المبلغ المستحق</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {FINANCIAL_CLAIMS.map((claim) => (
                <tr key={claim.id}>
                  <td className="p-2 border-l border-stone-200 text-center font-mono font-bold">{claim.itemNumber}</td>
                  <td className="p-2 border-l border-stone-200 font-bold">{claim.categoryAr}</td>
                  <td className="p-2 border-l border-stone-200 text-stone-700 text-[11px]">{claim.calculationMethodAr}</td>
                  <td className="p-2 text-center font-bold font-mono text-emerald-800 text-xs">{claim.amountOMR.toFixed(3)} ر.ع</td>
                </tr>
              ))}
              <tr className="bg-stone-900 text-white font-bold text-xs">
                <td colSpan={3} className="p-2.5 text-right">
                  إجمالي المستحقات العمالية الواجبة الأداء:
                </td>
                <td className="p-2.5 text-center font-mono text-amber-400 text-sm">
                  {totalClaim.toFixed(3)} ر.ع
                </td>
              </tr>
            </tbody>
          </table>

          {/* Formal Prayers */}
          <div className="p-4 bg-amber-50/60 border border-amber-300 rounded font-arabic-calligraphy text-xs space-y-2 leading-relaxed text-stone-900">
            <h4 className="font-bold text-amber-950 font-arabic-heading text-sm border-b border-amber-200 pb-1">
              الطلبات الختامية المرفوعة أمام عدالة المحكمة الموقرة:
            </h4>
            <ol className="list-decimal list-inside space-y-1 pr-1">
              <li>الحكم بـ <strong>إلغاء بلاغ ترك العمل (الهروب) الكيدي رقم (DCA-20260802114)</strong> لثبوت بطلانه وأسبقية الشكوى العمالية.</li>
              <li>الحكم بـ <strong>إلزام الشركة بتسليم جواز السفر الأصلي</strong> فوراً دون قيد أو شرط.</li>
              <li>الحكم بـ <strong>إلزام المدعى عليها بأن تؤدي للعامل مبلغاً قدره ({totalClaim.toFixed(3)} ر.ع)</strong> شاملاً مكافأة نهاية الخدمة والرواتب ورد الخصومات.</li>
              <li>الحكم بـ <strong>رفض ادعاء الشركة بوجود عجز مالي</strong> لثبوت كيديته وتناقضه مع السجلات المحاسبية الرسمية.</li>
              <li>منح العامل ترخيص <strong>نقل الكفالة (التنازل)</strong> لتمكينه من العمل وإعالة أسرته.</li>
            </ol>
          </div>

          {/* Signature Box */}
          <div className="pt-4 flex justify-between items-end text-xs">
            <div className="space-y-1">
              <p className="text-stone-500">مقدمه لعدالة المحكمة / دائرة تسوية المنازعات:</p>
              <p className="font-bold text-slate-900">{CASE_METADATA.workerNameAr} ({CASE_METADATA.workerNickname})</p>
              <p className="text-stone-600 font-mono">الرقم المدني: {CASE_METADATA.civilId} · الهاتف: 96522902</p>
            </div>

            <div className="text-center p-3 border border-stone-400 rounded min-w-[180px]">
              <span className="block text-[10px] text-stone-400 mb-4">التوقيع / البصمة</span>
              <span className="font-arabic-calligraphy text-base font-bold text-slate-900">حبيب الرحمن</span>
              <span className="block text-[9px] text-stone-400 font-mono mt-1">تاريخ التقديم: 2026/09/14</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
