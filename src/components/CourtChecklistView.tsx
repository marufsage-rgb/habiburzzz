import React, { useState } from 'react';
import { CheckSquare, Square, Printer, CheckCircle2, Shield, FolderCheck, FileText, Download } from 'lucide-react';
import { COURT_CHECKLIST_ITEMS } from '../data/grievanceData';
import { CASE_METADATA } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface CourtChecklistViewProps {
  lang: Language;
  onOpenPrintDossier: () => void;
}

export const CourtChecklistView: React.FC<CourtChecklistViewProps> = ({
  lang,
  onOpenPrintDossier
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'check-1-civil-id': true,
    'check-2-passport-note': true,
    'check-3-mol-slip': true,
    'check-4-court-summons': true,
    'check-5-arabic-dossier': true,
    'check-6-bank-muscat': true,
    'check-7-deductions-loan': true,
    'check-8-deposit-slips': true,
    'check-9-software-ledgers': true,
    'check-10-branch-sales': true,
    'check-11-customer-sheets': true,
    'check-12-designation-mismatch': true,
    'check-13-password-tampering': true,
    'check-14-ooredoo-notice': true,
    'check-15-medical-cert': true,
    'check-16-protest-letters': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    "1. Personal Identity & Court Filings",
    "2. Wage Protection System (WPS) & Financial Proofs",
    "3. Managerial Role & Operational Proofs",
    "4. Rebuttal Evidence & Employer Breaches"
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold font-mono">
              Barka Primary Court | Case 1005/1215/2026
            </span>
            <span className="text-xs text-stone-500 font-mono">
              MOL Ref: {CASE_METADATA.molComplaintRef}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-arabic-heading">
            {lang === 'ar' ? 'قائمة المستندات والوثائق المعتمدة لجلسة المحكمة' : 'Barka Primary Court — Evidence Checklist'}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            {lang === 'ar'
              ? 'تجهيز ٣ نسخ ورقية كاملة من كل مستند (نسخة لفضيلة القاضي، نسخة لكاتب الجلسة، ونسخة بحوزة العامل).'
              : 'Keep 3 complete physical sets for the Judge, Court Clerk, and personal case file.'}
          </p>
        </div>

        <button
          onClick={onOpenPrintDossier}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors whitespace-nowrap self-start md:self-auto"
        >
          <Printer className="w-4 h-4 text-amber-400" />
          <span>{lang === 'ar' ? 'طباعة القائمة (A4 Checklist)' : 'Print Evidence Checklist'}</span>
        </button>
      </div>

      {/* Case Header Details Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200 text-xs font-mono">
        <div>
          <span className="text-stone-500 block text-[10px]">Plaintiff / العامل</span>
          <strong className="text-slate-900">{CASE_METADATA.workerNameEn}</strong>
        </div>
        <div>
          <span className="text-stone-500 block text-[10px]">Civil ID / الرقم المدني</span>
          <strong className="text-blue-700">{CASE_METADATA.civilId}</strong>
        </div>
        <div>
          <span className="text-stone-500 block text-[10px]">Defendant / الشركة</span>
          <strong className="text-slate-900">{CASE_METADATA.employerNameEn}</strong>
        </div>
        <div>
          <span className="text-stone-500 block text-[10px]">CR Number / السجل التجاري</span>
          <strong className="text-stone-800">{CASE_METADATA.commercialRegNo}</strong>
        </div>
      </div>

      {/* 4 Sections of Checklist */}
      <div className="space-y-6">
        {sections.map((sectionName, sIdx) => {
          const sectionItems = COURT_CHECKLIST_ITEMS.filter(item => item.section === sectionName);
          return (
            <div key={sIdx} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
              <div className="bg-slate-900 text-white px-5 py-3 font-bold text-xs sm:text-sm font-sans flex items-center justify-between">
                <span>{sectionName}</span>
                <span className="text-[11px] text-amber-400 font-mono font-normal">
                  {sectionItems.filter(i => checkedItems[i.id]).length} / {sectionItems.length} جاهز
                </span>
              </div>

              <div className="divide-y divide-stone-100 font-sans text-xs">
                {sectionItems.map((item) => {
                  const isChecked = !!checkedItems[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleCheck(item.id)}
                      className={`p-4 flex items-start gap-3.5 cursor-pointer transition-colors ${
                        isChecked ? 'bg-white hover:bg-stone-50/70' : 'bg-stone-50/50 hover:bg-stone-100/50'
                      }`}
                    >
                      <button
                        type="button"
                        className="mt-0.5 text-amber-600 focus:outline-none shrink-0"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-stone-400" />
                        )}
                      </button>

                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <strong className="text-stone-900 font-bold text-xs sm:text-sm">
                            {item.title}
                          </strong>
                          <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 text-[10px] font-mono border border-stone-200">
                            {item.requiredCopies} نسخ ورقية مطلوبة
                          </span>
                        </div>

                        <div className="text-amber-900 font-arabic-heading text-xs font-semibold">
                          {item.arabicTitle}
                        </div>

                        <p className="text-stone-600 text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
