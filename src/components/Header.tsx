import React from 'react';
import { FileText, Printer, Shield, Languages, Landmark } from 'lucide-react';
import { Language } from '../types/legal';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onTriggerPrint: () => void;
}

export const Header: React.FC<HeaderProps & { onOpenSanadModal: () => void }> = ({
  currentTab,
  onSelectTab,
  lang,
  onSelectLang,
  onTriggerPrint,
  onOpenSanadModal
}) => {
  const tabs = [
    { id: 'memo', labelAr: 'المذكرة الرسمية', labelEn: 'Legal Memo', labelBn: 'আইনি আবেদন' },
    { id: 'evidence', labelAr: 'حافظة الأدلة والصور', labelEn: 'Evidence & Photos', labelBn: 'প্রমাণ ও ছবি' },
    { id: 'rebuttal', labelAr: 'تفنيد الهروب والعجز', labelEn: 'Desertion & Shortage', labelBn: 'হুরুপ ও শর্টেজ খণ্ডন' },
    { id: 'checklist', labelAr: 'قائمة مستندات المحكمة', labelEn: 'Court Checklist', labelBn: 'কোর্ট চেকলিস্ট' },
    { id: 'financial', labelAr: 'الحسابات والمطالبات', labelEn: 'Financial Claims', labelBn: 'আর্থিক হিসাব' },
    { id: 'defense', labelAr: 'المرافعة الشفهية', labelEn: 'Court Defense', labelBn: 'মৌখিক বক্তব্য' },
  ];

  return (
    <header className="no-print sticky top-0 z-50 bg-stone-900 border-b border-stone-800 text-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single-element Brand Title adhering to Frontend Design rule */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Landmark className="w-5 h-5" />
            </div>
            <span className="text-base sm:text-lg font-bold tracking-tight text-white font-arabic-heading">
              {lang === 'ar' ? 'ملف المحكمة العمالية — سلطنة عمان' : lang === 'bn' ? 'ওমান শ্রম আদালত কেস ফাইল' : 'Oman Labour Court Case File'}
            </span>
          </div>

          {/* Zone 2: Navigation Links (Single-line controls) */}
          <nav className="hidden lg:flex items-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  currentTab === tab.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-stone-300 hover:text-white hover:bg-stone-800'
                }`}
              >
                {lang === 'ar' ? tab.labelAr : lang === 'bn' ? tab.labelBn : tab.labelEn}
              </button>
            ))}
          </nav>

          {/* Zone 3: Actions (Print & Language Switcher) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Sanad Grievance Button */}
            <button
              onClick={onOpenSanadModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white text-xs font-bold rounded-md transition-colors shadow-sm whitespace-nowrap"
              title="توليد خطاب تظلم رسمي لإلغاء بلاغ الهروب الكيدي لمكتب سند"
            >
              <Shield className="w-3.5 h-3.5 text-rose-200" />
              <span>{lang === 'ar' ? 'تظلم بلاغ الهروب (سند)' : lang === 'bn' ? 'হুরুপ বাতিল আবেদন' : 'Desertion Grievance'}</span>
            </button>

            {/* Language Selector */}
            <div className="flex items-center bg-stone-800 p-1 rounded-md border border-stone-700 text-xs">
              <Languages className="w-3.5 h-3.5 text-stone-400 mx-1" />
              <button
                onClick={() => onSelectLang('ar')}
                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                  lang === 'ar' ? 'bg-amber-600 text-white' : 'text-stone-300 hover:text-white'
                }`}
              >
                عربي
              </button>
              <button
                onClick={() => onSelectLang('bn')}
                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                  lang === 'bn' ? 'bg-amber-600 text-white' : 'text-stone-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
              <button
                onClick={() => onSelectLang('en')}
                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                  lang === 'en' ? 'bg-amber-600 text-white' : 'text-stone-300 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print / PDF Trigger */}
            <button
              onClick={onTriggerPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium rounded-md transition-colors shadow-sm whitespace-nowrap"
              title="طباعة مذكرة الدعوى والأدلة بصيغة A4 PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'طباعة PDF رسمي' : lang === 'bn' ? 'A4 PDF প্রিন্ট' : 'Print Legal PDF'}</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab strip */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-stone-800 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 transition-colors ${
                currentTab === tab.id
                  ? 'bg-amber-600 text-white'
                  : 'text-stone-400 hover:text-white hover:bg-stone-800'
              }`}
            >
              {lang === 'ar' ? tab.labelAr : lang === 'bn' ? tab.labelBn : tab.labelEn}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
