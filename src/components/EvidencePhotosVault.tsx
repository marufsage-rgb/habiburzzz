import React, { useState } from 'react';
import { 
  FolderCheck, Search, Filter, ShieldCheck, Scale, 
  FileText, CheckCircle2, AlertTriangle, ExternalLink, Eye, Download, Printer
} from 'lucide-react';
import { EVIDENCE_DOCUMENTS } from '../data/legalCaseData';
import { EvidenceDocument, Language } from '../types/legal';
import { SubLedgerFacsimile } from './facsimiles/SubLedgerFacsimile';
import { DesertionFacsimile } from './facsimiles/DesertionFacsimile';
import { ResidentCardsFacsimile } from './facsimiles/ResidentCardsFacsimile';
import { OoredooNoticeFacsimile } from './facsimiles/OoredooNoticeFacsimile';
import { BankMuscatWpsFacsimile } from './facsimiles/BankMuscatWpsFacsimile';
import { DriveEvidenceTablet } from './DriveEvidenceTablet';

interface EvidencePhotosVaultProps {
  lang: Language;
  onOpenPrintDossier: () => void;
}

export const EvidencePhotosVault: React.FC<EvidencePhotosVaultProps> = ({
  lang,
  onOpenPrintDossier
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedExhibitId, setSelectedExhibitId] = useState<string>('exhibit-1-subledger');

  const categories = [
    { id: 'all', labelAr: 'جميع الأدلة والمستندات', labelEn: 'All Documents', labelBn: 'সকল প্রমাণপত্র' },
    { id: 'accounting', labelAr: 'النظام المحاسبي وتفنيد العجز', labelEn: 'Accounting & Shortage Rebuttal', labelBn: 'একাউন্টিং ও শর্টেজ খণ্ডন' },
    { id: 'desertion', labelAr: 'بلاغ الهروب الكيدي والتناقض', labelEn: 'Malicious Desertion Proof', labelBn: 'মিথ্যা হুরুপ খণ্ডন' },
    { id: 'visa', labelAr: 'التلاعب بالمهنة وبطاقات المقيم', labelEn: 'Visa Mismatch & Resident Cards', labelBn: 'ভিসা ও রেসিডেন্ট কার্ড' },
    { id: 'bank', labelAr: 'كشف بنك مسقط والراتب', labelEn: 'Bank Muscat Salary (WPS)', labelBn: 'ব্যাংক মাস্কাট বেতন স্টেটমেন্ট' },
    { id: 'penalty', labelAr: 'فواتير وخصومات أوريدو', labelEn: 'Ooredoo Penalties & Deductions', labelBn: 'অরিডো জরিমানা ও কর্তন' }
  ];

  const filteredExhibits = EVIDENCE_DOCUMENTS.filter(doc => {
    const matchesCategory = activeCategory === 'all' || doc.category === activeCategory;
    const matchesSearch = 
      doc.titleAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.summaryAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.shortageRebuttalAr.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeDoc = EVIDENCE_DOCUMENTS.find(d => d.id === selectedExhibitId) || EVIDENCE_DOCUMENTS[0];

  return (
    <div className="space-y-6">
      {/* Top Banner / Hero introducing the Evidence Vault */}
      <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
                {lang === 'ar' ? 'حافظة المستندات والأدلة المصورة المعتمدة' : lang === 'bn' ? 'অনুমোদিত প্রমাণ ও ছবি ভল্ট' : 'Official Case Evidence & Photos Vault'}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                MOL Ref: REF2603150080 · SJC: 1005/1215/2026
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-arabic-heading">
              {lang === 'ar'
                ? 'ملف الأدلة القضائية لدحض فرية العجز المالي وبلاغ الهروب الكيدي'
                : lang === 'bn'
                ? 'শর্টেজ ও মিথ্যা হুরুপ খারিজের আইনি প্রমাণপত্র ও ছবি'
                : 'Judicial Evidence Portfolio Refuting Fake Shortage & False Desertion'}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-4xl">
              {lang === 'ar'
                ? 'تحتوي هذه الحافظة على الصور والوثائق الأصلية المستخرجة من نظام محاسبة الشركة وبوابة وزارة العمل وبنك مسقط، مع الشرح القانوني التفصيلي لكل مستند لإظهار بطلان ادعاءات صاحب العمل وتأكيد استحقاق العامل حبيب الرحمن لكامل حقوقه عن 11 عاماً.'
                : lang === 'bn'
                ? 'এই ফাইলে কোম্পানির হিসাব সফটওয়্যার, শ্রম মন্ত্রণালয় পোর্টাল এবং ব্যাংক মাস্কাট থেকে সংগৃহীত মূল ছবি ও প্রমাণাদি সংযুক্ত রয়েছে যা শ্রম আদালত ও বিচারকের সামনে উপস্থাপনের জন্য প্রস্তুত।'
                : 'Contains verified original screenshots, accounting sub-ledgers, Ministry of Labour portal extracts, and Bank Muscat records demonstrating the worker\'s innocence and entitlement to full benefits.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onOpenPrintDossier}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>{lang === 'ar' ? 'طباعة حافظة المستندات (A4 PDF)' : lang === 'bn' ? 'প্রমাণপত্র প্রিন্ট করুন' : 'Print Evidence File'}</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="mt-6 pt-5 border-t border-stone-200 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
                }`}
              >
                {lang === 'ar' ? cat.labelAr : lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'ar' ? 'ابحث في المستندات والأدلة...' : lang === 'bn' ? 'প্রমাণ খুঁজুন...' : 'Search evidence...'}
              className="w-full pl-3 pr-9 py-1.5 text-xs bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Drive Evidence Tablet Infographic (from court_evidence_drive_archive) */}
      <DriveEvidenceTablet lang={lang} />

      {/* Main Two-Column Layout: Left List / Selector, Right Detailed Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Exhibits */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold text-stone-500 uppercase tracking-wider px-1">
            {lang === 'ar' ? `قائمة المستندات المرفقة (${filteredExhibits.length})` : `Exhibits List (${filteredExhibits.length})`}
          </div>

          <div className="space-y-2.5">
            {filteredExhibits.map((doc) => {
              const isSelected = selectedExhibitId === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setSelectedExhibitId(doc.id)}
                  className={`w-full text-right p-3.5 rounded-xl border transition-all duration-150 flex flex-col gap-2 ${
                    isSelected
                      ? 'bg-amber-50/80 border-amber-500 shadow-sm'
                      : 'bg-white border-stone-200 hover:border-stone-300 hover:bg-stone-50/70'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 w-full">
                    <span className={`text-[11px] font-bold px-2 py-0.5 rounded font-mono ${
                      isSelected ? 'bg-amber-600 text-white' : 'bg-stone-100 text-stone-700'
                    }`}>
                      المستند #{doc.exhibitNumber}
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {doc.documentDate}
                    </span>
                  </div>

                  <div className="font-bold text-xs text-stone-900 leading-snug">
                    {lang === 'ar' ? doc.titleAr : doc.titleEn}
                  </div>

                  <div className="text-[11px] text-stone-600 line-clamp-2 leading-relaxed">
                    {doc.summaryAr}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-stone-500 pt-1.5 border-t border-stone-100">
                    <span className="font-medium text-amber-800">{doc.categoryLabelAr}</span>
                    <span className="flex items-center gap-1 text-blue-700 font-semibold">
                      <Eye className="w-3 h-3" />
                      <span>{lang === 'ar' ? 'عرض وفحص' : 'Inspect'}</span>
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed Document Viewer & Legal Analysis */}
        <div className="lg:col-span-8 space-y-4">
          {activeDoc && (
            <div className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-5">
              {/* Exhibit Header */}
              <div className="border-b border-stone-200 pb-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-md bg-stone-900 text-amber-400 font-mono text-xs font-bold">
                      مستند رقم ({activeDoc.exhibitNumber})
                    </span>
                    <span className="text-xs font-semibold text-stone-500">
                      {activeDoc.categoryLabelAr}
                    </span>
                  </div>
                  <span className="text-xs text-stone-500 font-mono">
                    تاريخ الوثيقة: {activeDoc.documentDate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-arabic-heading">
                  {lang === 'ar' ? activeDoc.titleAr : activeDoc.titleEn}
                </h3>
              </div>

              {/* Key Figures Strip if available */}
              {activeDoc.keyFigures && activeDoc.keyFigures.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {activeDoc.keyFigures.map((fig, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-lg border text-center ${
                        fig.isHighlighted
                          ? 'bg-amber-50 border-amber-300 text-amber-950'
                          : 'bg-stone-50 border-stone-200 text-stone-800'
                      }`}
                    >
                      <span className="text-[10px] text-stone-500 block leading-tight mb-1">{fig.label}</span>
                      <span className="text-xs font-bold font-mono">{fig.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* The Realistic Facsimile Component Container */}
              <div className="border border-stone-200 rounded-xl overflow-hidden shadow-inner">
                {activeDoc.visualType === 'subledger' && <SubLedgerFacsimile />}
                {activeDoc.visualType === 'desertion' && <DesertionFacsimile />}
                {activeDoc.visualType === 'cards' && <ResidentCardsFacsimile />}
                {activeDoc.visualType === 'ooredoo' && <OoredooNoticeFacsimile />}
                {activeDoc.visualType === 'bank' && <BankMuscatWpsFacsimile />}
                {activeDoc.visualType === 'court' && (
                  <div className="p-4 bg-stone-900 text-stone-100 rounded-lg font-mono text-xs space-y-3">
                    <div className="flex justify-between border-b border-stone-800 pb-2 text-amber-400 font-bold">
                      <span>SUPREME JUDICIAL COUNCIL — COURT OF FIRST INSTANCE BARKA</span>
                      <span>CASE: 1005/1215/2026</span>
                    </div>
                    <div className="bg-stone-950 p-3 rounded border border-stone-800 space-y-1.5">
                      <p className="text-emerald-400 font-bold">نص الإشعار القضائي الرسمي الصادر للعامل:</p>
                      <p className="text-stone-300 leading-relaxed font-sans">
                        &quot;تم قيد طلبك رقم 1005/1215/2026: الدائرة فردي مدني و حددت الجلسة بتاريخ 29/06/2026 تسجيل الدعاوي بالمحكمة المحكمة الابتدائية ببركاء في تمام الساعة 09:00&quot;
                      </p>
                    </div>
                    <p className="text-[11px] text-stone-400 font-sans leading-relaxed">
                      هذا الإشعار يثبت رسمياً لجوء العامل للقضاء العماني في يونيو 2026، مما يدحض تماماً بلاغ الهروب الكيدي المقيد لاحقاً في 02/08/2026.
                    </p>
                  </div>
                )}
              </div>

              {/* Legal Explanation and Shortage Rebuttal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* 1. Legal Explanation */}
                <div className="bg-blue-50/60 border border-blue-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-xs">
                    <Scale className="w-4 h-4 text-blue-700" />
                    <span>الشرح القانوني للمستند (Legal Explanation):</span>
                  </div>
                  <p className="text-xs text-blue-950 leading-relaxed">
                    {activeDoc.legalArgumentAr}
                  </p>
                  <div className="pt-2 border-t border-blue-200/60 flex flex-wrap gap-1.5">
                    {activeDoc.legalArticles.map((art, idx) => (
                      <span key={idx} className="text-[10px] bg-blue-100/80 text-blue-800 px-2 py-0.5 rounded font-medium">
                        {art}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2. Rebuttal against Shortage & Absconding */}
                <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>كيف يفند هذا المستند تهمة العجز وبلاغ الهروب؟</span>
                  </div>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {activeDoc.shortageRebuttalAr}
                  </p>
                  <div className="pt-2 border-t border-emerald-200/60 text-[11px] text-emerald-800 font-semibold">
                    حجة قاطعة ومطابقة لملف الدعوى الأصلي بوزارة العمل
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
