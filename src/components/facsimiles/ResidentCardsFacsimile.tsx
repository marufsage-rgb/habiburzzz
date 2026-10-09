import React from 'react';
import { CreditCard, ShieldCheck, AlertCircle, FileCheck } from 'lucide-react';

export const ResidentCardsFacsimile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-stone-300 shadow-md p-4 space-y-4 text-stone-900 font-sans text-xs">
      <div className="border-b border-stone-200 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-amber-600" />
            <span>أدلة صور بطاقات المقيم وتغيير التأشيرة (المستند الثاني)</span>
          </h4>
          <p className="text-stone-500 text-[11px] mt-0.5">
            إثبات التلاعب بالمهنة المسجلة بالتأشيرة والتشغيل الفعلي في غير المسمى الرسمي
          </p>
        </div>
        <span className="bg-amber-100 text-amber-800 font-mono text-[11px] px-2.5 py-1 rounded border border-amber-300 font-bold">
          Civil ID: 103352388
        </span>
      </div>

      {/* Grid of 5 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Card 1: 2018 Resident Card */}
        <div className="bg-gradient-to-br from-slate-50 to-stone-100 p-3 rounded-lg border border-stone-300 relative shadow-sm">
          <div className="flex items-center justify-between text-[10px] text-stone-500 border-b border-stone-200 pb-1.5 mb-2">
            <span className="font-bold text-slate-800">1. بطاقة مقيم (2018م)</span>
            <span className="font-mono">Sultanate of Oman</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-500">الاسم:</span>
              <span className="font-bold text-slate-900">حبيب الرحمن عبد البارك</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">الرقم المدني:</span>
              <span className="font-mono font-semibold">103352388</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">صاحب العمل:</span>
              <span className="text-slate-800 text-[10px]">اليرموك الحديثة للتجارة</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-stone-200">
              <span className="text-stone-500">المهنة المسجلة:</span>
              <span className="font-bold text-rose-700 font-mono bg-rose-50 px-1 rounded">
                نادل طعام (WAITER)
              </span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-stone-500 bg-stone-200/60 p-1 rounded text-center">
            تأسيس فرع بركاء للألمنيوم بمسمى صوري
          </div>
        </div>

        {/* Card 2: 2019 Resident Card */}
        <div className="bg-gradient-to-br from-slate-50 to-stone-100 p-3 rounded-lg border border-stone-300 relative shadow-sm">
          <div className="flex items-center justify-between text-[10px] text-stone-500 border-b border-stone-200 pb-1.5 mb-2">
            <span className="font-bold text-slate-800">2. بطاقة مقيم (2019م)</span>
            <span className="font-mono">Resident Card ROP</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-500">الاسم:</span>
              <span className="font-bold text-slate-900">حبيب الرحمن عبد البارك</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">الرقم المدني:</span>
              <span className="font-mono font-semibold">103352388</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">الجنسية:</span>
              <span className="text-slate-800">بنجلاديشي</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-stone-200">
              <span className="text-stone-500">المهنة المسجلة:</span>
              <span className="font-bold text-rose-700 font-mono bg-rose-50 px-1 rounded">
                نادل طعام (WAITER)
              </span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-stone-500 bg-stone-200/60 p-1 rounded text-center">
            استمرار إدارة المبيعات وتجديد المسمى الصوري
          </div>
        </div>

        {/* Card 3: 2025 Resident Card */}
        <div className="bg-gradient-to-br from-rose-50/50 to-stone-100 p-3 rounded-lg border border-rose-300 relative shadow-sm">
          <div className="flex items-center justify-between text-[10px] text-rose-800 border-b border-rose-200 pb-1.5 mb-2">
            <span className="font-bold text-rose-900">3. بطاقة مقيم (تجديد 2025م)</span>
            <span className="font-mono text-rose-600">Visa: 98123291</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-500">الاسم:</span>
              <span className="font-bold text-slate-900">حبيب الرحمن عبد البارك</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">تاريخ الانتهاء:</span>
              <span className="font-mono font-bold text-slate-900">2025-09-06</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">المؤسسة:</span>
              <span className="text-slate-800 text-[10px]">اليرموك الحديثة للتجارة</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-rose-200">
              <span className="text-stone-500">المهنة المعدلة:</span>
              <span className="font-bold text-rose-800 font-mono bg-rose-100 px-1 rounded">
                عامل شحن وتفريغ (Loader)
              </span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-rose-700 bg-rose-100/70 p-1 rounded text-center font-semibold">
            تنزيل المسمى الوظيفي قسراً بعد 11 سنة خبرة
          </div>
        </div>

        {/* Card 4: Modern Smart Resident Card */}
        <div className="bg-gradient-to-br from-blue-50/50 to-stone-100 p-3 rounded-lg border border-blue-200 relative shadow-sm">
          <div className="flex items-center justify-between text-[10px] text-blue-900 border-b border-blue-200 pb-1.5 mb-2">
            <span className="font-bold text-blue-900">4. بطاقة مقيم الذكية (الشكل الحديث)</span>
            <span className="font-mono">National Identity</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-stone-500">الاسم الكامل:</span>
              <span className="font-bold text-slate-900">HABIBUR RAHMAN ABDUL BARAK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">الرقم المدني:</span>
              <span className="font-mono font-bold text-blue-700">103352388</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">تاريخ الميلاد:</span>
              <span className="font-mono">05/02/1986</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone-500">الرمز البصري:</span>
              <span className="font-mono text-[9px] text-stone-500">IDOMN1033523881&lt;&lt;&lt;&lt;&lt;&lt;</span>
            </div>
          </div>
          <div className="mt-2 text-[10px] text-blue-800 bg-blue-100/60 p-1 rounded text-center">
            إثبات الهوية الشخصية والقانونية الرسمية
          </div>
        </div>

        {/* Card 5: Omani Driving License */}
        <div className="bg-gradient-to-br from-emerald-50/60 to-stone-100 p-3 rounded-lg border border-emerald-300 relative shadow-sm sm:col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between text-[10px] text-emerald-900 border-b border-emerald-200 pb-1.5 mb-2">
            <span className="font-bold text-emerald-900">5. رخصة القيادة العمانية (شرطة عمان السلطانية)</span>
            <span className="font-mono text-emerald-700">Oman Driving License · 4 Years Experience</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-stone-500">صاحب الرخصة:</span>
                <span className="font-bold text-slate-900">حبيب الرحمن عبد البارك</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">الفئة:</span>
                <span className="font-mono font-bold text-emerald-800">خفيفة (Light Vehicle)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">الخبرة الميدانية:</span>
                <span className="font-bold text-slate-800">4 سنوات تنقل وتوصيل ومبيعات</span>
              </div>
            </div>
            <div className="bg-white p-2 rounded border border-emerald-200 text-[10px] text-emerald-950 space-y-1">
              <p className="font-bold flex items-center gap-1 text-emerald-900">
                <FileCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>دلالة قاطعة أمام المحكمة:</span>
              </p>
              <p className="leading-relaxed">
                امتلاك رخصة قيادة عمانية وخبرة في توزيع ونقل مقاطع الألمنيوم والزجاج يثبت بما لا يدع مجالاً للشك أن العامل يمارس أعمال المبيعات وإدارة شؤون الورشة الميدانية، وليس عاملاً عادياً يتقاضى 60 ريالاً أو نادلاً في مطعم!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official Legal Evaluation from Case Study */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 space-y-2">
        <h5 className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>نتيجة فحص المستندات الرسمية والمخالفات المرتكبة من الشركة:</span>
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] leading-relaxed text-stone-700">
          <div className="p-2 bg-white rounded border border-stone-200">
            <strong className="text-rose-700 block mb-1">1. التلاعب بالمهن والتعمين:</strong>
            تعمدت الشركة تسجيل مهنة &quot;نادل طعام&quot; ثم &quot;عامل شحن&quot; صورياً للتهرب من نسب التعمين المقررة واشتراطات وزارة العمل، بينما كان العامل يباشر مهام مدير فرع ومبيعات الألمنيوم والزجاج.
          </div>
          <div className="p-2 bg-white rounded border border-stone-200">
            <strong className="text-rose-700 block mb-1">2. حرمان العامل من حقوقه:</strong>
            تسجيل مسمى مهني متدنٍ أدى لحرمان العامل من راتب المهنة الحقيقي ومن مكافأة نهاية الخدمة العادلة، وسهل تهديده بالترحيل القسري وتنزيل الراتب إلى 70 বা 80 ريالاً.
          </div>
          <div className="p-2 bg-white rounded border border-stone-200">
            <strong className="text-emerald-700 block mb-1">3. احتساب الراتب الفعلي:</strong>
            تطبيق المبدأ القضائي المستقر بأن العبرة بالعمل الفعلي والأجر المقبوض (250 OMR) وليس بما دُوّن صورياً في سجلات التأشيرة للتحايل على القانون.
          </div>
        </div>
      </div>
    </div>
  );
};
