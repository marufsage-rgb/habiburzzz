import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, AlertCircle, CheckCircle2, FileSpreadsheet, ArrowDownRight, Layers } from 'lucide-react';
import { FINANCIAL_CLAIMS, CASE_METADATA } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface FinancialReconciliationSheetProps {
  lang: Language;
}

export const FinancialReconciliationSheet: React.FC<FinancialReconciliationSheetProps> = ({ lang }) => {
  const [basicWage, setBasicWage] = useState<number>(250);
  const [yearsOfService, setYearsOfService] = useState<number>(11);

  // Dynamic EOSB calculation under Oman Labour Law
  // First 3 years: 15 days basic per year = 45 days
  // Years 4+: 30 days basic per year
  const first3YearsDays = Math.min(yearsOfService, 3) * 15;
  const remainingYearsDays = Math.max(0, yearsOfService - 3) * 30;
  const totalEosbDays = first3YearsDays + remainingYearsDays;
  const calculatedEosb = (totalEosbDays / 30) * basicWage;

  // Comparison with employer's fake 60 OMR and 80 OMR
  const fake60Eosb = (totalEosbDays / 30) * 60;
  const fake80Eosb = (totalEosbDays / 30) * 80;

  const fixedClaimsTotal = 600 + 217 + 2400 + (yearsOfService * basicWage) + 350;
  const grandTotal = calculatedEosb + 600 + 217 + 2400 + (yearsOfService * basicWage) + 350;

  return (
    <div className="space-y-6">
      {/* Top Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-mono">الراتب الأساسي الفعلي المثبت (WPS)</span>
          <div className="text-2xl font-black text-slate-900 font-mono">250.000 <span className="text-xs font-normal">ر.ع</span></div>
          <span className="text-[11px] text-emerald-700 flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" /> مثبت بإيداعات بنك مسقط
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-mono">العقد الصوري المسجل بالوزارة</span>
          <div className="text-2xl font-black text-rose-600 font-mono line-through">60.000 <span className="text-xs font-normal">ر.ع</span></div>
          <span className="text-[11px] text-rose-700 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" /> صوري وباطل للتهرب من الرسوم
          </span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm space-y-1">
          <span className="text-xs text-stone-500 font-mono">مكافأة نهاية الخدمة المستحقة (11 سنة)</span>
          <div className="text-2xl font-black text-amber-600 font-mono">{calculatedEosb.toFixed(3)} <span className="text-xs font-normal">ر.ع</span></div>
          <span className="text-[11px] text-stone-600">بموجب المادة 61 من قانون العمل</span>
        </div>

        <div className="bg-stone-900 text-white p-5 rounded-xl border border-stone-800 shadow-sm space-y-1">
          <span className="text-xs text-amber-400 font-mono">إجمالي المطالبات المالية المستحقة</span>
          <div className="text-2xl font-black text-white font-mono">{grandTotal.toFixed(3)} <span className="text-xs font-normal text-stone-300">ر.ع</span></div>
          <span className="text-[11px] text-emerald-400 font-mono">مستحقات واجبة السداد للعامل</span>
        </div>
      </div>

      {/* Gratuity Theft Exposure: Real vs Fake Contract */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
          <div>
            <h3 className="text-base font-bold text-stone-900 font-arabic-heading flex items-center gap-2">
              <Calculator className="w-4 h-4 text-amber-600" />
              <span>كشف محاولة الاستيلاء على مكافأة نهاية الخدمة (مقارنة الأجر الفعلي بالعقد الصوري)</span>
            </h3>
            <p className="text-xs text-stone-500 mt-0.5">
              لماذا ادعت الشركة أن الراتب 60 বা 80 ريالاً؟ الفارق المالي الضخم يوضح الدافع الحقيقي للتحايل:
            </p>
          </div>
          <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-1 rounded">
            Royal Decree 53/2023 - Art. 61
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
          {/* Real Wage Calculation */}
          <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-500 text-emerald-950 space-y-2">
            <span className="font-bold text-emerald-900 block text-sm">1. بحسب الراتب الفعلي (250 ريال) — حق العامل</span>
            <ul className="space-y-1 text-[11px]">
              <li>أول 3 سنوات (15 يوماً/سنة): 375.000 ر.ع</li>
              <li>السنوات الـ 8 التالية (30 يوماً/سنة): 2,000.000 ر.ع</li>
              <li className="pt-1 border-t border-emerald-300 font-bold text-sm text-emerald-800">
                المجموع المستحق: 2,375.000 ريال عماني
              </li>
            </ul>
            <div className="text-[10px] text-emerald-700 bg-emerald-100 p-1.5 rounded">
              ✅ هذا هو الأجر الحقيقي الواجب الاعتماد أمام المحكمة.
            </div>
          </div>

          {/* Fake 80 OMR Claim */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 space-y-2">
            <span className="font-bold text-amber-900 block text-sm">2. بحسب ادعاء الشركة الشفهي (80 ريالاً)</span>
            <ul className="space-y-1 text-[11px]">
              <li>أول 3 سنوات (15 يوماً/سنة): 120.000 ر.ع</li>
              <li>السنوات الـ 8 التالية (30 يوماً/سنة): 640.000 ر.ع</li>
              <li className="pt-1 border-t border-amber-300 font-bold text-sm text-amber-800">
                المجموع المدفوع: 760.000 ريال عماني
              </li>
            </ul>
            <div className="text-[10px] text-amber-800 bg-amber-100 p-1.5 rounded font-bold">
              ضياع 1,615.000 ريال من مكافأة العامل!
            </div>
          </div>

          {/* Fake 60 OMR Contract */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-300 text-rose-950 space-y-2">
            <span className="font-bold text-rose-900 block text-sm">3. بحسب العقد الصوري القديم (60 ريالاً)</span>
            <ul className="space-y-1 text-[11px]">
              <li>أول 3 سنوات (15 يوماً/سنة): 90.000 ر.ع</li>
              <li>السنوات الـ 8 التالية (30 يوماً/سنة): 480.000 ر.ع</li>
              <li className="pt-1 border-t border-rose-300 font-bold text-sm text-rose-800">
                المجموع الصوري: 570.000 ريال عماني
              </li>
            </ul>
            <div className="text-[10px] text-rose-800 bg-rose-100 p-1.5 rounded font-bold">
              ضياع 1,805.000 ريال من مكافأة العامل!
            </div>
          </div>
        </div>
      </div>

      {/* Itemized Claims Table */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h3 className="text-base font-bold text-stone-900 font-arabic-heading flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>بيان تفصيلي ببنود المطالبات المالية العمالية المودعة بالدعوى</span>
          </h3>
          <span className="text-xs font-mono text-stone-500">
            6 بنود أساسية مشفوعة بالأدلة
          </span>
        </div>

        <div className="overflow-x-auto font-sans text-xs">
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-100 text-slate-800 font-semibold border-b border-stone-300">
              <tr>
                <th className="p-3 border-l border-stone-200 text-center">م</th>
                <th className="p-3 border-l border-stone-200">بند المطالبة والوصف</th>
                <th className="p-3 border-l border-stone-200">الأساس الحسابي</th>
                <th className="p-3 border-l border-stone-200">المستند الدال بالملف</th>
                <th className="p-3 text-center">المبلغ المستحق</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {FINANCIAL_CLAIMS.map((claim) => (
                <tr key={claim.id} className="hover:bg-stone-50">
                  <td className="p-3 border-l border-stone-200 text-center font-mono font-bold">{claim.itemNumber}</td>
                  <td className="p-3 border-l border-stone-200 font-bold text-stone-900">
                    <div>{claim.categoryAr}</div>
                    <div className="text-[10px] text-stone-500 font-normal mt-0.5">{claim.detailsAr}</div>
                  </td>
                  <td className="p-3 border-l border-stone-200 text-stone-700 font-mono text-[11px] leading-relaxed">
                    {claim.calculationMethodAr}
                  </td>
                  <td className="p-3 border-l border-stone-200 text-stone-600 text-[11px]">
                    {claim.evidenceRef}
                  </td>
                  <td className="p-3 text-center font-mono font-bold text-emerald-800 text-sm">
                    {claim.amountOMR.toFixed(3)} ر.ع
                  </td>
                </tr>
              ))}
              <tr className="bg-stone-900 text-white font-bold text-sm">
                <td colSpan={4} className="p-3 text-right">
                  إجمالي المبالغ المطالب بها رسمياً أمام المحكمة العمالية:
                </td>
                <td className="p-3 text-center font-mono text-amber-400 text-base">
                  {grandTotal.toFixed(3)} ر.ع
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Rebuttal of Company's 2,200 OMR Shortage */}
      <div className="bg-amber-50/60 border border-amber-300 rounded-xl p-5 space-y-3 font-sans text-xs">
        <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2 font-arabic-heading">
          <AlertCircle className="w-4 h-4 text-amber-700" />
          <span>التفنيد المحاسبي لفرية العجز المالي المزعوم (2,200 বা 3,000 ريال):</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-800 leading-relaxed">
          <div className="p-3 bg-white rounded-lg border border-amber-200 space-y-1.5">
            <strong className="text-amber-900 block font-bold">1. الرصيد الدائن بتاريخ 06/07/2024:</strong>
            <p>
              يثبت كشف الحساب الفرعي لنظام الشركة (MARUF LOAN A/C) أن الرصيد الحسابي بعد 9 سنوات من العمل كان <strong>رصيداً دائناً لصالح العامل بمبلغ (21.80 OMR Credit)</strong>. هذا يعني أن العامل سدد كافة التزاماته القديمة وزيادة، فمن أين أتى العجز الجديد؟
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg border border-amber-200 space-y-1.5">
            <strong className="text-amber-900 block font-bold">2. اصطناع العجز بعد تغيير كلمة السر:</strong>
            <p>
              قامت إدارة الشركة بتغيير كلمة سر النظام (Master Password) أثناء إجازة العامل في 2024، وأدخلت قيوداً يدوية صورية تحت بند &quot;ديون زبائن&quot; وتلفيات وهمية لإرغام العامل على التنازل عن مستحقات 11 عاماً، وهو تصرف كيدي باطل قانوناً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
