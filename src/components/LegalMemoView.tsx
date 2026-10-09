import React from 'react';
import { Landmark, Scale, FileText, CheckCircle2, ShieldAlert, AlertTriangle, Printer, Copy, Check } from 'lucide-react';
import { CASE_METADATA, FINANCIAL_CLAIMS, DESERTION_TIMELINE } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface LegalMemoViewProps {
  lang: Language;
  onOpenPrintDossier: () => void;
}

export const LegalMemoView: React.FC<LegalMemoViewProps> = ({
  lang,
  onOpenPrintDossier
}) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyMemo = () => {
    const memoElement = document.getElementById('arabic-legal-memo-content');
    if (memoElement) {
      navigator.clipboard.writeText(memoElement.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const totalClaimAmount = FINANCIAL_CLAIMS.reduce((sum, item) => sum + item.amountOMR, 0);

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-300 flex items-center justify-center text-amber-800">
            <Scale className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-stone-900 font-arabic-heading">
              {lang === 'ar' ? 'المذكرة القضائية الرسمية الشاملة' : 'Official Comprehensive Legal Memorandum'}
            </h3>
            <p className="text-stone-500 text-xs font-mono">
              وزارة العمل سلطنة عمان · الدائرة العمالية بمحكمة بركاء
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-md text-xs font-medium transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (lang === 'ar' ? 'تم نسخ النص' : 'Copied!') : (lang === 'ar' ? 'نسخ النص' : 'Copy Text')}</span>
          </button>
          <button
            onClick={onOpenPrintDossier}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-md text-xs font-semibold shadow-sm transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طباعة المذكرة (A4 PDF)' : 'Print Memo A4'}</span>
          </button>
        </div>
      </div>

      {/* Main Judicial Memo Sheet (Styled like formal court pleadings in Oman) */}
      <div
        id="arabic-legal-memo-content"
        className="bg-white rounded-2xl border border-stone-300 shadow-sm p-6 sm:p-10 font-arabic-calligraphy text-stone-900 leading-relaxed text-sm sm:text-base space-y-8"
      >
        {/* Formal Sultanate of Oman Header */}
        <div className="text-center border-b-2 border-stone-800 pb-6 space-y-2">
          <div className="text-xs tracking-widest uppercase font-sans text-stone-500 font-bold">
            سلطنة عمان — وزارة العمل / المجلس الأعلى للقضاء
          </div>
          <div className="text-sm font-sans font-bold text-stone-700">
            دائرة تسوية منازعات العمل (مسقط / بركاء) — المحكمة الابتدائية ببركاء (الدائرة فردي مدني / عمالي)
          </div>
          <h1 className="text-xl sm:text-2xl font-bold font-arabic-heading text-slate-950 pt-1">
            مذكرة دفاع وبسط وقائع وتفنيد لبلاغ الهروب والعجز المالي المزعوم
          </h1>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-sans text-stone-600 pt-1">
            <span className="bg-stone-100 px-3 py-1 rounded border border-stone-300 font-mono font-bold">
              رقم الشكوى العمالية: {CASE_METADATA.molComplaintRef}
            </span>
            <span className="bg-stone-100 px-3 py-1 rounded border border-stone-300 font-mono font-bold">
              رقم الدعوى القضائية: {CASE_METADATA.sjcCaseNo}
            </span>
            <span className="bg-stone-100 px-3 py-1 rounded border border-stone-300 font-mono font-bold">
              جلسة النزاع القادمة: {CASE_METADATA.molNextHearingDate}
            </span>
          </div>
        </div>

        {/* Litigants / Parties */}
        <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 font-sans text-xs space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 border-b md:border-b-0 md:border-l border-stone-200 pb-2 md:pb-0 md:pl-4">
              <span className="font-bold text-amber-900 block text-xs">المدعي (العامل):</span>
              <p className="font-bold text-stone-900 text-sm">{CASE_METADATA.workerNameAr} ({CASE_METADATA.workerNickname})</p>
              <p className="text-stone-600 font-mono">الرقم المدني: {CASE_METADATA.civilId} · تصريح العمل: {CASE_METADATA.workPermitNo}</p>
              <p className="text-stone-600">الجنسية: {CASE_METADATA.nationalityAr} · الوظيفة الفعلية: مدير فرع ومسؤول مبيعات أول</p>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-slate-900 block text-xs">المدعى عليها (صاحب العمل):</span>
              <p className="font-bold text-stone-900 text-sm">{CASE_METADATA.employerNameAr}</p>
              <p className="text-stone-600 font-mono">السجل التجاري (C.R.): {CASE_METADATA.commercialRegNo}</p>
              <p className="text-stone-600">النشاط: تجارة وتصنيع مقاطع الألمنيوم والزجاج والحديد (فرع بركاء الصناعية والمعبيلة)</p>
            </div>
          </div>
        </div>

        {/* Subject Paragraph */}
        <div className="space-y-2">
          <h2 className="text-lg font-bold font-arabic-heading text-slate-950 border-b border-stone-300 pb-1">
            الموضوع:
          </h2>
          <p className="text-justify leading-loose">
            مذكرة جوابية ودفاعية مقدمة من العامل <strong>حبيب الرحمن عبد البارك</strong>، تفيد ببطلان وكيدية بلاغ ترك العمل (الهروب) المقيد برقم <strong>(DCA-20260802114)</strong>، ودحض وتفنيد فرية &quot;العجز المالي&quot; المزعوم بمبلغ (2,200 ريال أو 3,000 ريال)، وبيان التلاعب بالأجور والمهن وحجز جواز السفر، والمطالبة الجازمة بإلزام الشركة بسداد كامل مستحقات نهاية الخدمة والرواتب المتأخرة والتعويضات المقررة قانوناً عن 11 عاماً من الخدمة المتواصلة.
          </p>
        </div>

        {/* Section 1: Facts */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-arabic-heading text-slate-950 border-b border-stone-300 pb-1">
            أولاً: ملخص الوقائع المتسلسلة (تاريخ من الإخلاص والانتهاكات المستمرة)
          </h2>
          <div className="space-y-3 text-justify leading-loose">
            <p>
              1. <strong>بداية العمل والتفاني:</strong> التحق العامل بالعمل لدى المدعى عليها في شهر يوليو 2015م، وظل يعمل طوال 11 عاماً متواصلة بكل أمانة وإخلاص. وفي عام 2018م تولى بمفرده تأسيس وافتتاح فرع الشركة الجديد بـ <strong>&quot;صناعية بركاء&quot;</strong> ونهض بالمبيعات من نقطة الصفر حتى حقق إيرادات قياسية تجاوزت <strong>(53,000 ريال عماني شهرياً)</strong> بشهادة سجلات وفواتير النظام المحاسبي.
            </p>
            <p>
              2. <strong>تزوير المسمى المهني والراتب:</strong> قامت الشركة بالتحايل على نسب التعمين عبر استخراج تأشيرة للعامل بمهنة متدنية صورية <strong>(&quot;نادل طعام - Waiter&quot;)</strong> ثم تحويلها مؤخراً إلى <strong>(&quot;عامل شحن وتفريغ - Loader&quot;)</strong> براتب مسجل في العقد الصوري (60 ريالاً فقط)، في حين أن الراتب الفعلي المتفق عليه والمحول دورياً عبر بنك مسقط هو <strong>(250 ريالاً عمانياً + 50 ريالاً عمولة مبيعات = 300 ريال)</strong>، مستغلين جهل العامل بالإجراءات الإدارية.
            </p>
            <p>
              3. <strong>أزمة كورونا والاستقطاع الجائر:</strong> عند سفر العامل في إجازته في 17/02/2020، أغلقت المطارات عالمياً في 25 مارس 2020م قسراً. امتنعت الشركة عن صرف أي أجر للعامل لمدة عام كامل. وعند عودته في 11/01/2021، قامت الشركة بتحميله نفقات التذاكر والحجر الصحي الإلزامي وقيدتها كـ &quot;قرض&quot; بمبلغ (600 ريال) وبدأت بخصم (50 ريالاً شهرياً) من راتبه لمدة 12 شهراً بالمخالفة الصريحة للمرسوم السلطاني وقوانين العمل.
            </p>
            <p>
              4. <strong>أزمة خط إنترنت ورشة الشركة (أوريدو):</strong> طلبت الشركة من العامل استخراج خط إنترنت باسمه ورقم بطاقته لخدمة فرع ورشة بركاء، وتخلفت الشركة عن سداد الفواتير أثناء إجازته، فصدر بحقه إنذار قضائي (رقم الحساب: 20721115)، ثم قامت الشركة باقتطاع كامل المبلغ وغراماته وقدره <strong>(217 ريالاً عمانياً)</strong> من راتبه الشخصي!
            </p>
            <p>
              5. <strong>تصفية الحسابات وثبوت الرصيد الدائن:</strong> يثبت كشف الحساب الفرعي الرسمي المستخرج من برنامج الشركة (MARUF LOAN A/C) أنه بتاريخ <strong>06/07/2024</strong> كان الحساب مسوى بنتيجة <strong>رصيد دائن لصالح العامل بمبلغ (21.80 OMR Credit)</strong>، مما يدحض أي ادعاء مسبق بوجود عجز في عهدته.
            </p>
            <p>
              6. <strong>اصطناع العجز والضغط والتجريد:</strong> عند عودة العامل من إجازته في 2024، قامت إدارة الشركة بتغيير كلمة سر النظام المحاسبي (Master Password)، ودس سلفيات موظفين آخرين (مثل شاه جهان وحافظ) في حسابه، واصطناع &quot;عجز مالي وهمي&quot; بخط اليد قدره 2,200 ريال، وهددته إما بقبول العمل كعامل شحن وتفريغ براتب 80 ريالاً فقط، أو الترحيل القسري دون مكافأة نهاية الخدمة. وعندما رفض التوقيع على أوراق إدانة نفسه، شرعوا في تنفيذ المكيدة ضده.
            </p>
          </div>
        </div>

        {/* Section 2: Rebuttal of Absconding */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-arabic-heading text-rose-950 border-b border-rose-300 pb-1">
            ثانياً: الدفع الجازم ببطلان وكيدية بلاغ ترك العمل (الهروب) رقم (DCA-20260802114)
          </h2>
          <div className="space-y-3 text-justify leading-loose">
            <p>
              تدفع المذكرة بالبطلان المطلق لبلاغ الهروب المعتمد كيدياً بتاريخ 02/08/2026 للأسباب التالية:
            </p>
            <div className="bg-rose-50 border-r-4 border-rose-600 p-4 rounded-lg font-sans text-xs space-y-2 text-stone-900">
              <p>
                <strong>1. أسبقية قيد النزاع العمالي الرسمي:</strong>
                قيد العامل شكواه الرسمية بوزارة العمل برقم <strong>(REF2603150080)</strong> بتاريخ <strong>15 مارس 2026م</strong>، في حين تدعي الشركة كذباً أن العامل هرب بتاريخ 30 مارس 2026م! فكيف يعقل أن يهرب عامل بعد أن لجأ لوزارة العمل قبل ذلك بـ 15 يوماً للمطالبة بمستحقاته؟
              </p>
              <p>
                <strong>2. حظر اتخاذ إجراءات عقابية ضد الشاكي:</strong>
                تنص تعليمات وزارة العمل وضوابط بلاغات ترك العمل صراحة على أنه: <em>&quot;لا يجوز لصاحب العمل تسجيل بلاغ ترك عمل ضد العامل متى ما كانت هناك شكوى عمالية سابقة قيد البحث والتسوية&quot;</em>، وهو ما يدمغ البلاغ بالبطلان والانتقام.
              </p>
              <p>
                <strong>3. سابقة رفض الوزارة للبلاغ الأول:</strong>
                تقدمت الشركة ببلاغ هروب أول برقم (DCA-20260615063) بتاريخ 15/06/2026 وقامت الوزارة بـ <strong>رفضه (Rejected)</strong> لعلمها بوجود الشكوى العمالية، إلا أن الشركة تحايلت وأعادت تقديمه في 02/08/2026 بعد إيداع 148 ريالاً لتذكرة السفر بغية الحصول على أمر طرد فوري للعامل.
              </p>
              <p>
                <strong>4. مثول العامل أمام المحكمة الابتدائية ببركاء:</strong>
                حضر العامل الجلسة المحددة بالدعوى رقم <strong>1005/1215/2026</strong> بتاريخ 29/06/2026، ولا يزال مقيماً داخل السلطنة ومتابعاً لجميع المواعيد، مما يؤكد أن وصف &quot;الهروب وتعذر التواصل&quot; هو افتراء واختلاق مادي ومعنوي.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Rebuttal of Financial Shortage */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-arabic-heading text-slate-950 border-b border-stone-300 pb-1">
            ثالثاً: تفنيد فرية العجز المالي المزعوم (2,200 ও 3,000 ريال) بالأدلة المحاسبية
          </h2>
          <div className="space-y-3 text-justify leading-loose">
            <p>
              تدعي الشركة وجود عجز مالي قدره 2,200 ريال ثم رفعته شفاهة إلى 3,000 ريال، وتفند هذه الفرية بما يلي:
            </p>
            <ul className="list-disc list-inside space-y-2 pr-2">
              <li>
                <strong>ثبوت براءة الذمة بكشف حساب الشركة:</strong> يثبت كشف الحساب الفرعي (MARUF LOAN A/C) أن الرصيد في 06/07/2024 كان دائناً لصالح العامل بمبلغ (21.80 OMR)، ولم يسبق للشركة توجيه أي إنذار كتابي أو تدقيق معتمد يثبت أي نقص.
              </li>
              <li>
                <strong>دس سلفيات عمال آخرين:</strong> أثبت الكشف إدراج سلفيات تخص أشخاصاً آخرين (سلفية شاه جهان بمبلغ 300 و250 ريالاً، وقرض حافظ بمبلغ 100 ريال) بهدف تضخيم المديونية صورياً وإرهاب العامل للتنازل عن حقوقه.
              </li>
              <li>
                <strong>ديون الزبائن التجارية ليست مسؤولية الأجير:</strong> ما تدعيه الشركة من ديون زبائن متبقية بالسوق هي ديون تجارية تعود لعملاء تعاملت معهم الشركة، ومخاطر الائتمان التجاري يتحملها صاحب العمل وحده وفقاً لأحكام قانون التجارة وقانون العمل، ولا يجوز تحميلها لراتب العامل أو اعتبارها عجزاً شخصياً.
              </li>
              <li>
                <strong>التلاعب بعد تغيير كلمة السر:</strong> تم اصطناع هذه الأرقام بخط اليد أثناء إجازة العامل بعد سلب صلاحيات دخوله للنظام، وتحدي الشركة بتقديم تقرير تدقيق مالي صادر من مكتب تدقيق حسابات قانوني معتمد ومحايد.
              </li>
            </ul>
          </div>
        </div>

        {/* Section 4: Wage & Entitlements Basis */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-arabic-heading text-slate-950 border-b border-stone-300 pb-1">
            رابعاً: الأسانيد القانونية لمطالبات العامل المالية (قانون العمل مرسوم 53/2023)
          </h2>
          <div className="space-y-3 text-justify leading-loose">
            <p>
              1. <strong>حجية كشف بنك مسقط في إثبات الراتب الحقيقي (250 ريال):</strong> استقرت أحكام المحاكم العمانية على أن كشوفات الحساب المصرفية المعتمدة وفقاً لنظام حماية الأجور (WPS) هي الفيصل في تحديد الأجر الفعلي والشامل، ويبطل العقد المسجل بـ 60 ريالاً لكونه عقداً صورياً قصد به التهرب من الالتزامات والرسوم.
            </p>
            <p>
              2. <strong>بطلان استقطاعات الحجر الصحي وفاتورة أوريدو:</strong> تنص المادة (56) والمادة (59) من قانون العمل على حظر استقطاع أي مبالغ من الأجر دون موافقة كتابية صريحة من العامل أو حكم قضائي، مما يوجب إلزام الشركة برد مبلغ (600 ريال) المحسوم عن كورونا، ومبلغ (217 ريالاً) المحسوم عن فاتورة أوريدو.
            </p>
            <p>
              3. <strong>استحقاق مكافأة نهاية الخدمة عن 11 سنة كاملة:</strong> تنص المادة (61) من قانون العمل على استحقاق العامل مكافأة نهاية خدمة بواقع أجر نصف شهر عن كل سنة من السنوات الثلاث الأولى، وأجر شهر كامل عن كل سنة تالية، محسوبة على أساس آخر أجر أساسي فعلي (250 ريالاً)، وتبلغ <strong>(2,375.000 ر.ع)</strong>.
            </p>
            <p>
              4. <strong>استحقاق بدل الإجازات السنوية غير المصروفة:</strong> تنص المادة (58) على حق العامل في إجازة سنوية بأجر شامل لا تقل عن 30 يوماً عن كل عام، وحيث إن الشركة دأبت على قطع الراتب وقت السفر (No Work No Pay) ولم تصرف له بدل إجازة طوال 11 سنة، فإنه يستحق المقابل المالي عنها.
            </p>
            <p>
              5. <strong>جريمة حجز جواز السفر:</strong> تحتجز الشركة جواز سفر العامل منذ تاريخ دخوله السلطنة بالمخالفة الصريحة للاتفاقيات الدولية والتعاميم الصادرة من شرطة عمان السلطانية ووزارة العمل، ويطالب العامل بتسليمه فوراً.
            </p>
          </div>
        </div>

        {/* Section 5: Financial Claims Table */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold font-arabic-heading text-slate-950 border-b border-stone-300 pb-1">
            خامساً: جدول تصفية المستحقات المالية الإجمالية المطالب بها
          </h2>
          <div className="overflow-x-auto font-sans text-xs">
            <table className="w-full text-right border-collapse border border-stone-300">
              <thead className="bg-stone-100 text-stone-900 font-bold border-b border-stone-300">
                <tr>
                  <th className="p-2.5 border-l border-stone-300">م</th>
                  <th className="p-2.5 border-l border-stone-300">بند المطالبة المالية</th>
                  <th className="p-2.5 border-l border-stone-300">طريقة الاحتساب والمستند الدال</th>
                  <th className="p-2.5 border-l border-stone-300">السند القانوني (قانون العمل)</th>
                  <th className="p-2.5 text-center">المبلغ (ريال عماني)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {FINANCIAL_CLAIMS.map((claim) => (
                  <tr key={claim.id} className="hover:bg-stone-50">
                    <td className="p-2.5 border-l border-stone-200 font-bold font-mono text-center">{claim.itemNumber}</td>
                    <td className="p-2.5 border-l border-stone-200 font-bold text-stone-900">{claim.categoryAr}</td>
                    <td className="p-2.5 border-l border-stone-200 text-stone-700 leading-relaxed">{claim.calculationMethodAr}</td>
                    <td className="p-2.5 border-l border-stone-200 text-stone-600">{claim.legalArticleOman}</td>
                    <td className="p-2.5 text-center font-bold font-mono text-emerald-800 text-sm">
                      {claim.amountOMR.toFixed(3)}
                    </td>
                  </tr>
                ))}
                <tr className="bg-stone-900 text-white font-bold text-sm">
                  <td colSpan={4} className="p-3 text-right">
                    إجمالي المستحقات المالية العمالية واجبة الأداء (Total Financial Dues):
                  </td>
                  <td className="p-3 text-center font-mono text-amber-400 text-base">
                    {totalClaimAmount.toFixed(3)} ر.ع
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 6: Conclusive Prayers (الطلبات الختامية) */}
        <div className="space-y-4 pt-4 border-t-2 border-stone-800">
          <h2 className="text-xl font-bold font-arabic-heading text-slate-950 text-center">
            بناءً عليه.. يلتمس العامل من عدالة المحكمة الموقرة ودائرة تسوية المنازعات:
          </h2>
          <div className="bg-amber-50/70 border border-amber-300 rounded-xl p-5 font-sans text-xs sm:text-sm space-y-3 leading-relaxed text-stone-900">
            <p className="font-bold text-amber-950 text-sm border-b border-amber-200 pb-1">
              أولاً: في الشق العاجل والتحفظي:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pr-2">
              <li>
                <strong>إلغاء بلاغ ترك العمل (الهروب) الكيدي</strong> رقم (DCA-20260802114) فوراً وبطلان كافة آثاره لأسبقية قيد النزاع العمالي رسمياً.
              </li>
              <li>
                <strong>إلزام صاحب العمل بتسليم جواز السفر الأصلي</strong> الخاص بالعامل فوراً، وكف يده عن أي محاولة للترحيل القسري قبل الفصل النهائي في الدعوى واستلام المستحقات.
              </li>
              <li>
                <strong>منح العامل ترخيص نقل كفالة (تنازل / Transfer)</strong> دون قيد أو شرط لتمكينه من العمل المشروع لإعالة أسرته وبناته الأربع في ظل انقطاع راتبه.
              </li>
            </ol>

            <p className="font-bold text-amber-950 text-sm border-b border-amber-200 pb-1 pt-3">
              ثانياً: في الموضوع والمطالبات المالية:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 pr-2">
              <li>
                <strong>إلزام المدعى عليها بأن تؤدي للمدعي مبلغاً إجمالياً قدره ({totalClaimAmount.toFixed(3)} ر.ع)</strong> شاملاً مكافأة نهاية الخدمة عن 11 سنة، وبدل الإجازات السنوية، واسترداد المبالغ المقتطعة تعسفياً (600 ريال تذاكر وحجر كورونا + 217 ريال فاتورة أوريدو).
              </li>
              <li>
                <strong>تفنيد والقضاء برفض ادعاء الشركة بوجود عجز مالي</strong> قدره 2,200 ريال لخلوه من أي سند محاسبي قانوني وثبوت الرصيد الدائن للعامل بموجب كشف حساب الشركة المؤرخ 06/07/2024.
              </li>
              <li>
                <strong>التعويض الجابر عن الأضرار المادية والمعنوية</strong> والتعسف وتنزيل المسمى الوظيفي والتهديد بإنهاء الخدمة، ومصاريف الدعوى وأتعاب المحاماة.
              </li>
            </ol>
          </div>
        </div>

        {/* Signature & Closing */}
        <div className="pt-6 border-t border-stone-300 flex flex-wrap items-center justify-between gap-4 font-sans text-xs">
          <div className="space-y-1">
            <p className="text-stone-500">وتفضلوا بقبول فائق الاحترام والتقدير والعدالة،،</p>
            <p className="font-bold text-stone-900">مقدمه العامل المظلوم: {CASE_METADATA.workerNameAr} ({CASE_METADATA.workerNickname})</p>
            <p className="text-stone-500 font-mono">الرقم المدني: {CASE_METADATA.civilId} · هاتف: 96522902</p>
          </div>

          <div className="text-center p-4 border border-dashed border-stone-400 rounded-lg min-w-[200px] bg-stone-50">
            <span className="block text-stone-400 text-[10px] mb-4">التوقيع / البصمة</span>
            <div className="font-arabic-calligraphy text-base font-bold text-slate-800">
              حبيب الرحمن عبد البارك
            </div>
            <span className="text-[10px] text-stone-400 font-mono mt-1 block">Date: 2026/09/14</span>
          </div>
        </div>
      </div>
    </div>
  );
};
