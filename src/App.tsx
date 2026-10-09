import React, { useState } from 'react';
import { 
  Scale, FileText, FolderCheck, ShieldAlert, 
  Calculator, MessageSquare, Printer, CheckCircle2, 
  AlertTriangle, PhoneCall, ExternalLink, Calendar,
  Building2, UserCheck, ShieldCheck, Download
} from 'lucide-react';
import { Header } from './components/Header';
import { LegalMemoView } from './components/LegalMemoView';
import { EvidencePhotosVault } from './components/EvidencePhotosVault';
import { DesertionRebuttalSection } from './components/DesertionRebuttalSection';
import { FinancialReconciliationSheet } from './components/FinancialReconciliationSheet';
import { VerbalDefenseAssistant } from './components/VerbalDefenseAssistant';
import { PrintablePdfDossier } from './components/PrintablePdfDossier';
import { CourtChecklistView } from './components/CourtChecklistView';
import { SanadGrievanceModal } from './components/SanadGrievanceModal';
import { CASE_METADATA, FINANCIAL_CLAIMS } from './data/legalCaseData';
import { Language } from './types/legal';

// Import generated authentic assets
import courtDossierImg from './assets/images/oman_court_dossier_seal_1791183072126.jpg';
import workshopImg from './assets/images/oman_workshop_barka_1791183084267.jpg';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('memo');
  const [lang, setLang] = useState<Language>('ar');
  const [showPdfPreview, setShowPdfPreview] = useState<boolean>(false);
  const [showSanadModal, setShowSanadModal] = useState<boolean>(false);

  const totalDues = FINANCIAL_CLAIMS.reduce((acc, curr) => acc + curr.amountOMR, 0);

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans pb-16" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Bar adhering to Top Bar Contract */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        lang={lang}
        onSelectLang={setLang}
        onTriggerPrint={handleTriggerPrint}
        onOpenSanadModal={() => setShowSanadModal(true)}
      />

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        
        {/* Case Status Marquee Header */}
        <div className="no-print bg-stone-900 text-white rounded-2xl overflow-hidden border border-stone-800 shadow-md">
          <div className="relative">
            {/* Background Cover Overlay */}
            <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
              <img
                src={courtDossierImg}
                alt="Oman Judicial Court File"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent"></div>
            </div>

            <div className="relative p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded bg-amber-600/30 border border-amber-500/50 text-amber-300 font-bold font-mono">
                    وزارة العمل — سلطنة عمان
                  </span>
                  <span className="text-stone-300 font-mono">
                    MOL Complaint Ref: <strong className="text-white">{CASE_METADATA.molComplaintRef}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono">
                  <span className="bg-rose-950/80 text-rose-300 border border-rose-700/60 px-2.5 py-0.5 rounded">
                    البلاغ الكيدي: {CASE_METADATA.desertionRefApproved} (مطعون فيه)
                  </span>
                  <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 px-2.5 py-0.5 rounded">
                    جلسة التسوية: {CASE_METADATA.molNextHearingDate}
                  </span>
                </div>
              </div>

              {/* Title & Core Case Context */}
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-arabic-heading tracking-tight leading-tight">
                  {lang === 'ar' ? (
                    <>ملف الدعوى العمالية وتفنيد العجز المالي وبلاغ الهروب الكيدي</>
                  ) : lang === 'bn' ? (
                    <>ওমান শ্রম আদালত মামলা ফাইল: শর্টেজ ও হুরুপ খণ্ডন দলিল</>
                  ) : (
                    <>Oman Labour Court Legal Dossier: Rebuttal of Shortage & False Desertion</>
                  )}
                </h1>
                <p className="text-stone-300 text-xs sm:text-sm max-w-4xl leading-relaxed">
                  {lang === 'ar' ? (
                    <>
                      قضية العامل <strong>حبيب الرحمن عبد البارك (معروف)</strong> ضد <strong>شركة اليرموك الحديثة للتجارة ش.م.م</strong> (سجل تجاري 1834525) بعد 11 عاماً من العمل في مبيعات وإدارة فرع بركاء والمعبيلة للألمنيوم والزجاج.
                    </>
                  ) : (
                    <>
                      Case study of worker <strong>Habibur Rahman Abdul Barak (Maruf)</strong> vs <strong>Al Yarmook Modern Trading LLC</strong> (CR 1834525) regarding 11 years of service in Aluminium & Glass sales in Barka & Mabellah.
                    </>
                  )}
                </p>
              </div>

              {/* Quick Case Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-stone-800 text-xs">
                <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/80">
                  <span className="text-stone-400 block text-[10px] font-mono">مدة الخدمة المتواصلة</span>
                  <span className="text-sm sm:text-base font-bold text-white font-mono">11 سنة (منذ 2015)</span>
                </div>

                <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/80">
                  <span className="text-stone-400 block text-[10px] font-mono">الراتب الفعلي المثبت (بنك مسقط)</span>
                  <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">250.000 OMR / شهر</span>
                </div>

                <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/80">
                  <span className="text-stone-400 block text-[10px] font-mono">العجز المالي المزعوم (باطل)</span>
                  <span className="text-sm sm:text-base font-bold text-rose-400 font-mono">2,200 OMR (مفند)</span>
                </div>

                <div className="bg-stone-800/80 p-3 rounded-lg border border-stone-700/80">
                  <span className="text-stone-400 block text-[10px] font-mono">إجمالي المستحقات العمالية</span>
                  <span className="text-sm sm:text-base font-bold text-amber-400 font-mono">{totalDues.toFixed(3)} OMR</span>
                </div>
              </div>

              {/* Quick CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowPdfPreview(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'معاينة ملف PDF الكامل' : 'Preview Full PDF Dossier'}</span>
                </button>
                <button
                  onClick={handleTriggerPrint}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'طباعة فورية للمحكمة (A4)' : 'Direct Print A4 PDF'}</span>
                </button>
                <button
                  onClick={() => setCurrentTab('defense')}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-medium transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>{lang === 'ar' ? 'دليل الكلمات الشفهية للجلسة' : 'Verbal Pleading Script'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Views */}
        <div className="no-print">
          {currentTab === 'memo' && (
            <LegalMemoView
              lang={lang}
              onOpenPrintDossier={() => setShowPdfPreview(true)}
            />
          )}

          {currentTab === 'evidence' && (
            <EvidencePhotosVault
              lang={lang}
              onOpenPrintDossier={() => setShowPdfPreview(true)}
            />
          )}

          {currentTab === 'rebuttal' && (
            <DesertionRebuttalSection
              lang={lang}
              onOpenSanadModal={() => setShowSanadModal(true)}
            />
          )}

          {currentTab === 'checklist' && (
            <CourtChecklistView
              lang={lang}
              onOpenPrintDossier={() => setShowPdfPreview(true)}
            />
          )}

          {currentTab === 'financial' && (
            <FinancialReconciliationSheet
              lang={lang}
            />
          )}

          {currentTab === 'defense' && (
            <VerbalDefenseAssistant
              lang={lang}
            />
          )}
        </div>

        {/* Emergency Assistance Footer Card */}
        <div className="no-print bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
            <h4 className="font-bold text-xs text-stone-900 flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>أرقام الطوارئ والمساعدة القانونية المجانية للعمال بسلطنة عمان:</span>
            </h4>
            <span className="text-[11px] text-stone-500 font-mono">Official Helplines</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-stone-700">
            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-bold block text-slate-900">وزارة العمل — الخط الساخن:</span>
              <span className="font-mono text-emerald-800 font-bold text-sm">80077000</span>
              <p className="text-[10px] text-stone-500 mt-1">متابعة الشكاوى وبلاغات العمل</p>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-bold block text-slate-900">سفارة بنجلاديش بمسقط (قسم العمل):</span>
              <span className="font-mono text-emerald-800 font-bold text-sm">+968 2460 3328</span>
              <p className="text-[10px] text-stone-500 mt-1">الخط الساخن: +968 9675 2266 (24 ساعة)</p>
            </div>

            <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
              <span className="font-bold block text-slate-900">اللجنة العمانية لحقوق الإنسان:</span>
              <span className="font-mono text-emerald-800 font-bold text-sm">80077444</span>
              <p className="text-[10px] text-stone-500 mt-1">حظر حجز الجوازات والترحيل القسري</p>
            </div>
          </div>
        </div>

      </main>

      {/* Printable PDF Dossier (Renders for Print AND Interactive Preview Modal) */}
      <PrintablePdfDossier
        isPreviewMode={showPdfPreview}
        onClosePreview={() => setShowPdfPreview(false)}
      />

      {/* Sanad Office Grievance Letter Modal */}
      <SanadGrievanceModal
        isOpen={showSanadModal}
        onClose={() => setShowSanadModal(false)}
        lang={lang}
      />
    </div>
  );
}
