import React from 'react';
import { AlertTriangle, CheckCircle, XCircle, Info, ArrowRight } from 'lucide-react';

export const DesertionFacsimile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-stone-300 shadow-md overflow-hidden text-stone-900 font-sans text-xs">
      {/* Official Government Portal Header */}
      <div className="bg-slate-800 text-white px-4 py-3 flex items-center justify-between border-b border-slate-700">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-amber-500/20 border border-amber-400 flex items-center justify-center text-amber-300 font-bold text-[10px]">
            عمان
          </div>
          <div>
            <div className="font-bold text-sm">وزارة العمل — بوابة الخدمات الإلكترونية</div>
            <div className="text-[10px] text-slate-300 font-mono">Ministry of Labour — E-Services Portal (Desertion Grievances)</div>
          </div>
        </div>
        <div className="text-right text-[11px] font-mono text-emerald-400">
          حالة العامل: سارية (Active Work Permit)
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Screen 1: Official Ministry Rules Banner (Directly from Case Study PDF) */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-slate-800 space-y-2">
          <div className="flex items-center gap-2 font-bold text-blue-900 text-xs">
            <Info className="w-4 h-4 text-blue-600" />
            <span>تعليمات نظام الشكاوى بوزارة العمل (MOL Complaints Instructions)</span>
          </div>
          <p className="text-[11px] text-blue-950 leading-relaxed font-mono">
            &quot;The Employer is not allowed to terminate or take any action against the employee for submitting a complaint to The Ministry of Labour.&quot;
          </p>
          <div className="bg-amber-50 border border-amber-300 text-amber-900 p-2.5 rounded text-[11px] space-y-1">
            <p className="font-semibold">تنبيه النظام الرسمي المسجل بحساب العامل:</p>
            <p className="font-mono text-[10px]">
              &quot;You are already having pending complaint, therefore you cannot submit new complaint.&quot;
            </p>
            <p className="text-[10px] text-stone-600">
              (الشكوى العمالية رقم <strong>REF2603150080</strong> مقيدة في 15/03/2026 وما زالت معلقة قيد الفصل القضائي).
            </p>
          </div>
        </div>

        {/* Screen 2: Desertion Requests Table */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
              <span>سجل بلاغات ترك العمل المقدمة من الكفيل (Desertions Requests List)</span>
            </h4>
            <span className="text-[10px] text-stone-500 font-mono">Establishment CR: 1834525</span>
          </div>

          <div className="overflow-x-auto border border-stone-200 rounded-lg">
            <table className="w-full text-[11px] text-right border-collapse">
              <thead className="bg-slate-100 text-slate-700 font-semibold border-b border-stone-200">
                <tr>
                  <th className="p-2 border-l border-stone-200">رقم البلاغ (Ref)</th>
                  <th className="p-2 border-l border-stone-200">اسم المنشأة والكفيل</th>
                  <th className="p-2 border-l border-stone-200 text-center">تاريخ التقديم</th>
                  <th className="p-2 border-l border-stone-200 text-center">تاريخ الهروب المزعوم</th>
                  <th className="p-2 border-l border-stone-200 text-center">حالة الطلب</th>
                  <th className="p-2 text-center">قيمة التذكرة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 font-mono">
                {/* 1st Attempt: REJECTED */}
                <tr className="bg-stone-50 hover:bg-stone-100">
                  <td className="p-2 border-l border-stone-200 font-bold text-slate-800">DCA-20260615063</td>
                  <td className="p-2 border-l border-stone-200 font-sans">
                    1834525 | شركة اليرموك الحديثة للتجارة
                  </td>
                  <td className="p-2 border-l border-stone-200 text-center">15/06/2026</td>
                  <td className="p-2 border-l border-stone-200 text-center text-stone-500">03/06/2026</td>
                  <td className="p-2 border-l border-stone-200 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
                      <XCircle className="w-3 h-3 text-rose-600" /> مرفوض Rejected
                    </span>
                  </td>
                  <td className="p-2 text-center text-stone-400">Not Paid</td>
                </tr>

                {/* 2nd Attempt: FRAUDULENT APPROVAL */}
                <tr className="bg-rose-50/60 hover:bg-rose-100/40 border-t-2 border-rose-300">
                  <td className="p-2 border-l border-stone-200 font-bold text-rose-900">DCA-20260802114</td>
                  <td className="p-2 border-l border-stone-200 font-sans text-rose-950">
                    1834525 | شركة اليرموك الحديثة للتجارة
                  </td>
                  <td className="p-2 border-l border-stone-200 text-center font-bold text-rose-900">02/08/2026</td>
                  <td className="p-2 border-l border-stone-200 text-center font-bold text-rose-700">30/03/2026</td>
                  <td className="p-2 border-l border-stone-200 text-center">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      <AlertTriangle className="w-3 h-3 text-amber-600" /> معتمد كيدياً Approved
                    </span>
                  </td>
                  <td className="p-2 text-center font-bold text-rose-800">148.000 OMR Paid</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Screen 3: Detail Box of Approved Fraudulent Desertion */}
        <div className="bg-stone-50 border border-stone-300 rounded-lg p-3 space-y-2">
          <div className="font-bold text-stone-800 text-[11px] border-b border-stone-200 pb-1 flex justify-between">
            <span>تفاصيل البلاغ الكيدي (DCA-20260802114) المعروض أمام المحكمة:</span>
            <span className="text-rose-700">موقع العامل: داخل سلطنة عمان (Inside Oman)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
            <div>
              <span className="text-stone-500">نص ادعاء الكفيل الحرفي: </span>
              <p className="bg-white p-2 rounded border border-stone-200 mt-1 text-slate-800 italic">
                &quot;بتاريخ 30/03/2026 رفض العامل العمل وهرب وتعذر التواصل معه&quot;
              </p>
            </div>
            <div>
              <span className="text-stone-500">سداد تذكرة الطرد القسري: </span>
              <p className="bg-white p-2 rounded border border-stone-200 mt-1 text-slate-800">
                قام الكفيل بسداد مبلغ <strong>148 ريال عماني</strong> بقصد استصدار أمر ترحيل فوري لإسقاط مستحقات 11 عاماً.
              </p>
            </div>
          </div>
        </div>

        {/* The Decisive Legal Counter-Proof (الدليل الحاسم) */}
        <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3 space-y-2 text-emerald-950">
          <div className="flex items-center gap-2 font-bold text-xs text-emerald-900">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>الدفع القاطع ببطلان بلاغ الهروب وكيديته (للقاضي / المحقق العمالي):</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed">
            <li>
              <strong>أسبقية الشكوى العمالية:</strong> قيد العامل شكواه الرسمية برقم (REF2603150080) في <strong>15/03/2026</strong>، أي قبل تاريخ الهروب المزعوم (30/03/2026) بنصف شهر كامل!
            </li>
            <li>
              <strong>سابقة الرفض الإداري:</strong> رفضت وزارة العمل البلاغ الأول (DCA-20260615063) المقدم في 15/06/2026 لعلمها بوجود نزاع رسمي قائم.
            </li>
            <li>
              <strong>جلسة المحكمة في 29/06/2026:</strong> حضر العامل أمام الدائرة فردي مدني بمحكمة بركاء (الدعوى 1005/1215/2026)، فكيف يكون هارباً وهو ماثل أمام القضاء؟!
            </li>
            <li>
              <strong>سوء نية الكفيل:</strong> إعادة تقديم البلاغ في 02/08/2026 وسداد 148 ريالاً تم بهدف إعاقة تداول الجلسة القادمة وحرمان العامل من مكافأة نهاية الخدمة.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};
