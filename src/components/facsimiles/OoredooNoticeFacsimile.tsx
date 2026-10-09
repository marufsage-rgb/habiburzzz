import React from 'react';
import { AlertCircle, FileText, Scale } from 'lucide-react';

export const OoredooNoticeFacsimile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-stone-300 shadow-md p-4 space-y-4 text-stone-900 font-sans text-xs">
      <div className="border-b border-stone-200 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div>
          <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Scale className="w-4 h-4 text-red-600" />
            <span>إنذار قضائي نهائي — شركة أوريدو عمان (مستند رقم 4)</span>
          </h4>
          <p className="text-stone-500 text-[11px] mt-0.5">
            إثبات استقطاع ديون فواتير إنترنت ورشة الشركة التجارية من الراتب الخاص للعامل
          </p>
        </div>
        <span className="bg-red-100 text-red-800 font-mono text-[11px] px-2.5 py-1 rounded border border-red-300 font-bold">
          الحساب: 20721115
        </span>
      </div>

      {/* Notice Card Representation */}
      <div className="bg-stone-50 border border-stone-300 rounded-lg p-4 space-y-3 font-serif">
        <div className="text-center space-y-1 border-b border-stone-300 pb-2">
          <p className="font-bold text-sm text-slate-900">مكتب الدكتور خالد بن سالم الوهيبي</p>
          <p className="text-xs text-stone-600">محامون ومستشارون قانونيون ومحكمون — سلطنة عمان</p>
          <p className="text-[10px] text-stone-500 font-mono">الوكيل القانوني لشركة إيليت كولكشن (وكيل تحصيل ديون شركة Ooredoo)</p>
        </div>

        <div className="flex justify-between text-[11px] font-mono border-b border-stone-200 pb-2">
          <span>التاريخ: 27 يناير 2025م</span>
          <span className="font-bold text-red-700">إشعار ومطالبة قضائية نهائية</span>
        </div>

        <div className="space-y-2 text-[11px] leading-relaxed text-stone-800">
          <p>
            <strong>إلى الفاضل / حبيب الرحمن عبد البارك (الرقم المدني: 103352388)</strong>
          </p>
          <p>
            نخطركم بضرورة سداد المبلغ المستحق عليكم وقدره <strong>(95.755 ريال عماني)</strong> الناتج عن التخلف عن سداد فواتير خط الخدمة رقم (20721115) المشترك باسمكم لصالح شركة الاتصالات العمانية القطرية (أوريدو).
          </p>
          <div className="bg-amber-50 p-2.5 rounded border border-amber-200 text-amber-950 font-sans text-[10px] space-y-1">
            <p className="font-bold">⚠️ المهلة والتحذير القضائي:</p>
            <p>
              يمنحكم المكتب مهلة <strong>يوم واحد فقط</strong> من تاريخ هذا الإخطار لسداد المبلغ في فروع أوريدو، وفي حال عدم السداد فإنه سيتم قيد دعوى قضائية والمطالبة بكافة الرسوم القضائية وأتعاب المحاماة.
            </p>
          </div>
        </div>

        <div className="pt-2 border-t border-stone-200 text-right text-[10px] text-stone-500 font-mono">
          مكتب المحاماة — مسقط، سلطنة عمان
        </div>
      </div>

      {/* Rebuttal & Deduction Facts */}
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 space-y-2 text-[11px] text-red-950">
        <div className="font-bold flex items-center gap-1.5 text-red-900 text-xs">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <span>ملابسات الواقعة وأوجه المخالفة القانونية المرتكبة من الشركة:</span>
        </div>
        <ul className="list-disc list-inside space-y-1 leading-relaxed text-stone-800">
          <li>
            <strong>استغلال بطاقة المقيم:</strong> طلبت إدارة شركة اليرموك من العامل استخراج خط هاتف وإنترنت باسمه الشخصي لتشغيل أجهزة كمبيوتر ورشة بركاء ومحل الألمنيوم.
          </li>
          <li>
            <strong>امتناع الشركة عن السداد:</strong> أثناء سفر العامل في إجازته الرسمية، امتنعت الشركة عن سداد الفواتير الشهرية لعدة أشهر، مما تسبب في إحالة الخط للقضاء وصدور الإنذار.
          </li>
          <li>
            <strong>الخصم القسري من الراتب (217 ريالاً):</strong> قامت الشركة بتحميل العامل كامل مبلغ الفواتير مع غرامات التأخير والمصاريف بإجمالي <strong>(217.000 ر.ع)</strong> وخصمها من راتبه الشخصي!
          </li>
          <li>
            <strong>المادة القانونية:</strong> مخالفة المادة (54) والمادة (56) من قانون العمل؛ حيث يلتزم صاحب العمل بجميع نفقات التشغيل وأدوات الإنتاج ولا يجوز تحميلها للأجير مطلقاً.
          </li>
        </ul>
      </div>
    </div>
  );
};
