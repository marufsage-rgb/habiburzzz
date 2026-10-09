import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export const SubLedgerFacsimile: React.FC = () => {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl overflow-hidden border border-stone-700 shadow-md font-sans">
      {/* Title bar mimicking software */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 px-4 py-2.5 border-b border-blue-800/50 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="font-mono font-bold tracking-wide text-blue-200">
            AL YARMOOK ACCOUNTING ERP v2.4 — [Sub-Ledger MARUF LOAN A/C (01-01-2021 to 08-01-2022)]
          </span>
        </div>
        <span className="text-[11px] text-stone-400 font-mono">Company Code: 1834525 · Branch: BARKA SANAIYA</span>
      </div>

      {/* Software Account Header */}
      <div className="p-3 bg-stone-950/80 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div>
          <span className="text-stone-400">Account Name: </span>
          <span className="font-bold text-amber-400 font-mono">MARUF LOAN A/C (حساب سلفيات وقروض العامل معروف)</span>
        </div>
        <div>
          <span className="text-stone-400">Currency: </span>
          <span className="text-white font-mono font-semibold">OMR (ريال عماني)</span>
        </div>
        <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-2.5 py-1 rounded text-[11px]">
          الرصيد الفعلي في 06/07/2024: <strong className="font-mono">21.80 OMR (Credit دائن لصالح العامل)</strong>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left border-collapse">
          <thead className="bg-stone-800/90 text-stone-300 font-mono text-[11px] uppercase tracking-wider border-b border-stone-700">
            <tr>
              <th className="p-2.5 border-r border-stone-700">Date</th>
              <th className="p-2.5 border-r border-stone-700">Voucher No</th>
              <th className="p-2.5 border-r border-stone-700">Account Details & Remarks</th>
              <th className="p-2.5 border-r border-stone-700 text-right">Debit (OMR)</th>
              <th className="p-2.5 border-r border-stone-700 text-right">Credit (OMR)</th>
              <th className="p-2.5 text-right">Balance (OMR)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800 font-mono text-stone-200 text-[11px]">
            <tr className="bg-stone-900/50">
              <td className="p-2 border-r border-stone-800 text-stone-400">01-01-2021</td>
              <td className="p-2 border-r border-stone-800 text-stone-400">—</td>
              <td className="p-2 border-r border-stone-800 font-semibold text-stone-300">Opening Balance</td>
              <td className="p-2 border-r border-stone-800 text-right text-amber-400">870.300</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right font-bold text-amber-400">870.300 Dr</td>
            </tr>

            <tr className="hover:bg-stone-800/40">
              <td className="p-2 border-r border-stone-800">13-01-2021</td>
              <td className="p-2 border-r border-stone-800 text-blue-400">Pmt 1520</td>
              <td className="p-2 border-r border-stone-800">Cash / MARUF ADVANCE TRANSFER TO BANGLADESH</td>
              <td className="p-2 border-r border-stone-800 text-right">75.000</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right">945.300 Dr</td>
            </tr>

            <tr className="hover:bg-stone-800/40">
              <td className="p-2 border-r border-stone-800">28-01-2021</td>
              <td className="p-2 border-r border-stone-800 text-blue-400">Pmt 1535</td>
              <td className="p-2 border-r border-stone-800">Cash / MARUF RENEW PLAN TICKAT (إلزام بتذكرة الحجر)</td>
              <td className="p-2 border-r border-stone-800 text-right text-rose-400">75.000</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right text-rose-300">1,020.300 Dr</td>
            </tr>

            <tr className="hover:bg-stone-800/40">
              <td className="p-2 border-r border-stone-800">13-02-2021</td>
              <td className="p-2 border-r border-stone-800 text-blue-400">Pmt 1558</td>
              <td className="p-2 border-r border-stone-800">Cash / MARUF ADVANCE BALANCE MARUF (خصم شهري 50 ر.ع)</td>
              <td className="p-2 border-r border-stone-800 text-right text-rose-400">50.000</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right">1,070.300 Dr</td>
            </tr>

            <tr className="bg-emerald-950/20">
              <td className="p-2 border-r border-stone-800">13-03-2021</td>
              <td className="p-2 border-r border-stone-800 text-emerald-400">Dnt 5</td>
              <td className="p-2 border-r border-stone-800 text-emerald-300 font-semibold">
                BANK MUSCAT NAZAR / TICKET SALARY ETC MARUF (سداد بنكي)
              </td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 border-r border-stone-800 text-right text-emerald-400 font-bold">509.300</td>
              <td className="p-2 text-right text-emerald-300 font-bold">561.000 Dr</td>
            </tr>

            {/* Injected other workers loans: RED FLAGS */}
            <tr className="bg-rose-950/30 border-y border-rose-800/50">
              <td className="p-2 border-r border-stone-800 text-rose-300 font-bold">11-12-2021</td>
              <td className="p-2 border-r border-stone-800 text-rose-300">Pmt 2080</td>
              <td className="p-2 border-r border-stone-800 text-rose-200">
                <span className="text-amber-400 font-bold">⚠️ SHAJAHAN ADVANCE (سلفية عامل آخر: شاه جهان)</span>
                <span className="block text-[10px] text-rose-300">تم إدراج سلفية شخص آخر في حساب ماروف دون مبرر!</span>
              </td>
              <td className="p-2 border-r border-stone-800 text-right text-rose-400 font-bold">300.000</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right text-rose-300 font-bold">911.000 Dr</td>
            </tr>

            <tr className="bg-rose-950/30">
              <td className="p-2 border-r border-stone-800 text-rose-300 font-bold">20-12-2021</td>
              <td className="p-2 border-r border-stone-800 text-rose-300">Pmt 2110</td>
              <td className="p-2 border-r border-stone-800 text-rose-200">
                <span className="text-amber-400 font-bold">⚠️ HAFEZ LOAN (قرض عامل آخر: حافظ)</span>
                <span className="block text-[10px] text-rose-300">إقحام قرض عامل يدعى حافظ في حساب الشاكي!</span>
              </td>
              <td className="p-2 border-r border-stone-800 text-right text-rose-400 font-bold">100.000</td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 text-right text-rose-300 font-bold">1,011.000 Dr</td>
            </tr>

            <tr className="bg-rose-950/30 border-b border-rose-800/50">
              <td className="p-2 border-r border-stone-800 text-rose-300">02-01-2022</td>
              <td className="p-2 border-r border-stone-800 text-rose-300">Rct 4608</td>
              <td className="p-2 border-r border-stone-800 text-rose-200">
                Cash / SHAJAHAN 250 BALANCE (رصيد شاه جهان 250 ر.ع)
              </td>
              <td className="p-2 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2 border-r border-stone-800 text-right text-emerald-400">50.000</td>
              <td className="p-2 text-right text-rose-300">961.000 Dr</td>
            </tr>

            {/* Final Balance 2024 Proof */}
            <tr className="bg-emerald-950/40 border-t-2 border-emerald-600">
              <td className="p-2.5 border-r border-stone-800 text-emerald-300 font-bold">06-07-2024</td>
              <td className="p-2.5 border-r border-stone-800 text-emerald-400">Final Stmt</td>
              <td className="p-2.5 border-r border-stone-800 text-emerald-200 font-bold">
                الرصيد الختامي بعد التسويات: রصيد دائن لصالح العامل حبيب الرحمن
              </td>
              <td className="p-2.5 border-r border-stone-800 text-right text-stone-500">—</td>
              <td className="p-2.5 border-r border-stone-800 text-right text-emerald-400 font-bold">21.800</td>
              <td className="p-2.5 text-right font-black text-emerald-300 text-xs">
                +21.800 OMR (Credit)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Critical Legal Explanation Callout */}
      <div className="p-4 bg-stone-950 border-t border-stone-800 space-y-3">
        <div className="flex items-start gap-2.5 text-rose-300">
          <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-rose-400" />
          <div className="text-xs space-y-1">
            <p className="font-bold text-rose-200">
              تفنيد العجز المالي المزعوم (2,200 বা 3,000 ريال) أمام محكمة العمل:
            </p>
            <p className="text-stone-300 leading-relaxed">
              تثبت بيانات هذا الكشف المحاسبي المأخوذ من كمبيوتر الشركة قيام الإدارة بالتحايل وإقحام ديون وسلفيات عمال آخرين (مثل العامل شاه جهان والعامل حافظ بإجمالي 650 ريالاً)، فضلاً عن استقطاع 600 ريال مصاريف حجر صحي وتذاكر بالمخالفة للمادة (56) من قانون العمل.
              والأهم من ذلك: أنه في تاريخ <strong>06/07/2024</strong> كان الحساب مسوى بنتيجة <strong>رصيد دائن 21.80 ريال لصالح العامل</strong>، مما يقطع بأن العجز الجديد المزعوم (2,200 ريال) هو عجز مصطنع تم خلقه يدوياً وعبر تعديل كلمة السر لتبرير طرد العامل بدون مستحقاته.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-[11px] text-stone-400">
          <span>المستند المرفق رقم (1) بحافظة مستندات المحكمة</span>
          <span className="text-emerald-400 font-mono">الحالة: أصل مثبت من نظام الشركة</span>
        </div>
      </div>
    </div>
  );
};
