import React from 'react';
import { Landmark, CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export const BankMuscatWpsFacsimile: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-stone-300 shadow-md p-4 space-y-4 text-stone-900 font-sans text-xs">
      <div className="border-b border-stone-200 pb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold font-serif text-sm">
            BM
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              كشف حساب بنك مسقط ونظام حماية الأجور (WPS Statement)
            </h4>
            <p className="text-stone-500 text-[11px]">
              Bank Muscat Account Statement — Habibur Rahman Abdul Barak (Account No. 0418-XXXXX)
            </p>
          </div>
        </div>
        <div className="text-right">
          <span className="bg-emerald-100 text-emerald-800 font-mono text-[11px] px-2.5 py-1 rounded border border-emerald-300 font-bold">
            الراتب الفعلي: 250.000 OMR
          </span>
        </div>
      </div>

      {/* Salary Comparison Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
        <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-300">
          <span className="text-[10px] text-stone-500 block uppercase font-mono">الراتب الفعلي المحول للبنك</span>
          <span className="text-lg font-bold text-emerald-800 font-mono">250.000 OMR</span>
          <span className="text-[10px] text-emerald-700 block mt-0.5">ثابت بكشوفات WPS الرسمية</span>
        </div>
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-300">
          <span className="text-[10px] text-stone-500 block uppercase font-mono">العقد الصوري المسجل بالوزارة</span>
          <span className="text-lg font-bold text-rose-700 line-through font-mono">60.000 OMR</span>
          <span className="text-[10px] text-rose-600 block mt-0.5">صوري وباطل قانوناً للتحايل</span>
        </div>
        <div className="p-3 rounded-lg bg-amber-50 border border-amber-300">
          <span className="text-[10px] text-stone-500 block uppercase font-mono">فارق مكافأة نهاية الخدمة (11 سنة)</span>
          <span className="text-lg font-bold text-amber-800 font-mono">+1,554.000 OMR</span>
          <span className="text-[10px] text-amber-700 block mt-0.5">المبلغ الذي تحاول الشركة سرقته</span>
        </div>
      </div>

      {/* Bank Statement Transactions Excerpt */}
      <div className="overflow-x-auto border border-stone-200 rounded-lg">
        <table className="w-full text-[11px] text-left border-collapse">
          <thead className="bg-slate-100 text-slate-700 font-mono text-[10px] uppercase border-b border-stone-200">
            <tr>
              <th className="p-2 border-r border-stone-200">Txn Date</th>
              <th className="p-2 border-r border-stone-200">Description / Narration</th>
              <th className="p-2 border-r border-stone-200 text-right">Debit (OMR)</th>
              <th className="p-2 border-r border-stone-200 text-right">Credit (OMR)</th>
              <th className="p-2 text-right">Status / Legal Note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 font-mono text-stone-800">
            <tr className="hover:bg-stone-50">
              <td className="p-2 border-r border-stone-200">28-10-2023</td>
              <td className="p-2 border-r border-stone-200 font-sans">
                SALARY TRF AL YARMOOK TRADING LLC (WPS SALARY)
              </td>
              <td className="p-2 border-r border-stone-200 text-right text-stone-400">—</td>
              <td className="p-2 border-r border-stone-200 text-right font-bold text-emerald-700">250.000</td>
              <td className="p-2 text-right text-emerald-800 font-sans text-[10px]">راتب كامل معتمد</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-2 border-r border-stone-200">27-11-2023</td>
              <td className="p-2 border-r border-stone-200 font-sans">
                SALARY TRF AL YARMOOK TRADING LLC (WPS SALARY)
              </td>
              <td className="p-2 border-r border-stone-200 text-right text-stone-400">—</td>
              <td className="p-2 border-r border-stone-200 text-right font-bold text-emerald-700">250.000</td>
              <td className="p-2 text-right text-emerald-800 font-sans text-[10px]">راتب كامل معتمد</td>
            </tr>
            <tr className="bg-rose-50/50">
              <td className="p-2 border-r border-stone-200 text-rose-800 font-bold">29-01-2026</td>
              <td className="p-2 border-r border-stone-200 font-sans text-rose-900">
                SALARY TRF AL YARMOOK TRADING LLC (REDUCED)
              </td>
              <td className="p-2 border-r border-stone-200 text-right text-stone-400">—</td>
              <td className="p-2 border-r border-stone-200 text-right font-bold text-rose-700">80.000</td>
              <td className="p-2 text-right text-rose-800 font-sans text-[10px] font-bold">
                ⚠️ استقطاع تعسفي 170 ر.ع دون مسوغ
              </td>
            </tr>
            <tr className="bg-amber-50/40">
              <td className="p-2 border-r border-stone-200">02-02-2026</td>
              <td className="p-2 border-r border-stone-200 font-sans">
                CASH PAYMENT COMPLEMENTARY AFTER PROTEST LETTER
              </td>
              <td className="p-2 border-r border-stone-200 text-right text-stone-400">—</td>
              <td className="p-2 border-r border-stone-200 text-right font-bold text-amber-700">77.300</td>
              <td className="p-2 text-right text-amber-800 font-sans text-[10px]">
                نقد بعد خطاب الاحتجاج (إجمالي 157.300)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Judicial Argument */}
      <div className="bg-stone-50 border border-stone-200 rounded-lg p-3 space-y-1.5 text-[11px] text-stone-700">
        <strong className="text-slate-900 block font-bold text-xs">
          القاعدة القانونية الراسخة أمام المحكمة العليا ومحاكم سلطنة عمان:
        </strong>
        <p className="leading-relaxed">
          &quot;كشوفات التحويلات المصرفية لنظام حماية الأجور (WPS) الصادرة من البنوك المعتمدة تعد بينة قاطعة غير قابلة للتجزئة على مقدار الأجر الحقيقي الذي يتقاضاه العامل، ويبطل أي شرط أو عقد صوري يقل عن ذلك الأجر استناداً إلى المادة (3) والمادة (53) من قانون العمل العماني، ويكون احتساب مكافأة نهاية الخدمة على أساس آخر أجر فعلي (250 ريال عماني)&quot;.
        </p>
      </div>
    </div>
  );
};
