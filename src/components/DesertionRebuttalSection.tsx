import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Clock, Calendar, ArrowLeft, ArrowRight, FileX } from 'lucide-react';
import { DESERTION_TIMELINE, CASE_METADATA } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface DesertionRebuttalSectionProps {
  lang: Language;
  onOpenSanadModal?: () => void;
}

export const DesertionRebuttalSection: React.FC<DesertionRebuttalSectionProps> = ({ lang, onOpenSanadModal }) => {
  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-rose-950 text-white rounded-xl p-6 border border-rose-800 shadow-sm space-y-3">
        <div className="flex items-center gap-2 text-rose-300 text-xs font-bold font-mono">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>تفنيد بلاغ الهروب الكيدي رقم: {CASE_METADATA.desertionRefApproved}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-arabic-heading text-rose-100">
          {lang === 'ar'
            ? 'الأدلة القاطعة على كيدية وبطلان بلاغ ترك العمل (الهروب) المقدم من الكفيل'
            : 'Conclusive Evidence Proving the Absconding Report is Malicious Retaliation'}
        </h2>
        <p className="text-rose-200 text-xs sm:text-sm leading-relaxed max-w-4xl font-sans">
          {lang === 'ar'
            ? 'لجأ صاحب العمل إلى تسجيل بلاغ هروب كيدي بتاريخ 02/08/2026 بعد أن عجز عن إجبار العامل على التوقيع على أوراق عجز وهمي، وسدد مبلغ 148 ريالاً لتذكرة السفر بقصد استصدار أمر ترحيل فوري لإسقاط حقوق 11 عاماً، في حين أن العامل قيد شكواه العمالية الرسمية قبل تاريخ الهروب المزعوم!'
            : 'The employer fraudulently filed an absconding notice and paid 148 OMR for deportation solely to evade paying 11 years of gratuity after the worker filed a formal labour dispute.'}
        </p>

        {onOpenSanadModal && (
          <div className="pt-2">
            <button
              onClick={onOpenSanadModal}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              <FileX className="w-4 h-4" />
              <span>{lang === 'ar' ? 'فتح وطباعة خطاب التظلم لمكتب سند (Grievance Letter)' : 'Open Official Sanad Grievance Letter'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Side-by-Side Comparison: Worker Legal Action vs Employer Fraudulent Reaction */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Worker Legitimate Action Box */}
        <div className="bg-emerald-50/70 border border-emerald-300 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>1. مسار العامل القانوني والمشروع (سابق في التاريخ)</span>
          </div>
          <ul className="space-y-2 text-xs text-emerald-950 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>15 مارس 2026:</strong> قيد شكوى عمالية رسمية بوزارة العمل برقم <code>REF2603150080</code> للمطالبة بفرق الراتب ومكافأة نهاية الخدمة.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>حماية قانونية:</strong> تعليمات نظام وزارة العمل تمنع صراحة صاحب العمل من اتخاذ أي إجراء عقابي أو إنهاء خدمة العامل طالما النزاع معروض.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0"></span>
              <span><strong>29 يونيو 2026:</strong> حضور جلسة المحكمة الابتدائية ببركاء بالدعوى رقم <code>1005/1215/2026</code> ومباشرة الدفاع.</span>
            </li>
          </ul>
        </div>

        {/* Employer Malicious Reaction Box */}
        <div className="bg-rose-50/70 border border-rose-300 rounded-xl p-5 space-y-3">
          <div className="flex items-center gap-2 text-rose-900 font-bold text-sm">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>2. رد فعل الكفيل الكيدي والانتقامي (لاحق في التاريخ)</span>
          </div>
          <ul className="space-y-2 text-xs text-rose-950 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
              <span><strong>ادعاء تاريخ كاذب:</strong> ادعى الكفيل أن العامل ترك العمل في <code>30/03/2026</code> (بعد تاريخ قيد الشكوى بـ 15 يوماً!).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
              <span><strong>15 يونيو 2026:</strong> تقديم بلاغ هروب برقم <code>DCA-20260615063</code> وقامت الوزارة بـ <strong>رفضه (Rejected)</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></span>
              <span><strong>02 أغسطس 2026:</strong> إعادة تقييد البلاغ برقم <code>DCA-20260802114</code> وسداد 148 ريالاً ثمن تذكرة طرد قسري لمنع انعقاد الجلسة.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Chronological Dispute Timeline */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2 font-arabic-heading">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>التسلسل الزمني الدقيق للوقائع وكشف التحايل</span>
          </h3>
          <span className="text-xs text-stone-500 font-mono">2026 Timeline Audit</span>
        </div>

        <div className="relative border-r-2 border-stone-200 pr-5 space-y-6 mr-3">
          {DESERTION_TIMELINE.map((point, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className={`absolute -right-[27px] top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-white ${
                point.actor === 'worker' ? 'border-emerald-600 bg-emerald-100' :
                point.actor === 'employer' ? 'border-rose-600 bg-rose-100' : 'border-blue-600 bg-blue-100'
              }`}></div>

              <div className="space-y-1.5 bg-stone-50 p-3.5 rounded-lg border border-stone-200 hover:border-stone-300 transition-colors">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-stone-900 font-arabic-heading">{point.titleAr}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold font-mono ${
                      point.actor === 'worker' ? 'bg-emerald-100 text-emerald-800' :
                      point.actor === 'employer' ? 'bg-rose-100 text-rose-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {point.proofBadge}
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 font-mono flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{point.date}</span>
                  </span>
                </div>

                <p className="text-xs text-stone-700 leading-relaxed">
                  {point.descriptionAr}
                </p>

                <div className="text-[11px] text-amber-900 bg-amber-50/80 p-2 rounded border border-amber-200/60 mt-1">
                  <strong>الأثر القانوني أمام القاضي: </strong>{point.legalImpactAr}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Text for Court Pleading regarding Desertion */}
      <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-5 space-y-3 font-arabic-calligraphy text-sm sm:text-base leading-relaxed text-stone-900">
        <h4 className="font-bold text-amber-950 font-arabic-heading text-base border-b border-amber-200 pb-1">
          صيغة المرافعة القانونية المكتوبة بخصوص بلاغ الهروب لتقديمها للقاضي:
        </h4>
        <p className="italic bg-white p-4 rounded-lg border border-amber-200 text-justify">
          &quot;سيدي القاضي / حضرة المحقق العمالي المحترم، إن بلاغ ترك العمل رقم (DCA-20260802114) هو بلاغ كيدي وافتراء مكشوف قصد به التهرب من سداد التزامات الشركة العمالية عن 11 عاماً، ونبسط لعدالتكم بطلانه استناداً إلى:
          أولاً: أن الشكوى العمالية (REF2603150080) تم تقييدها رسمياً في 15/03/2026 قبل تاريخ ترك العمل المزعوم (30/03/2026).
          ثانياً: أن الوزارة قد رفضت البلاغ الأول المقدم في 15/06/2026 لذات السبب.
          ثالثاً: أن العامل كان ماثلاً أمام المحكمة الابتدائية ببركاء بالدعوى رقم (1005/1215/2026) في 29/06/2026 ولم يغادر السلطنة.
          لذا نلتمس القضاء بـ إلغاء هذا البلاغ واعتباره كأن لم يكن، وإلزام الكفيل بتمكين العامل من نقل الكفالة وصرف مستحقاته.&quot;
        </p>
      </div>
    </div>
  );
};
