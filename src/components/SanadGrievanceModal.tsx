import React, { useState } from 'react';
import { FileText, Printer, Copy, Check, ShieldAlert, X, AlertTriangle, Building, User, Calendar, ExternalLink } from 'lucide-react';
import { SANAD_GRIEVANCE_LETTER } from '../data/grievanceData';
import { CASE_METADATA } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface SanadGrievanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const SanadGrievanceModal: React.FC<SanadGrievanceModalProps> = ({
  isOpen,
  onClose,
  lang
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(SANAD_GRIEVANCE_LETTER.bodyAr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center" dir="rtl">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-300 overflow-hidden space-y-0 text-stone-900 font-sans my-8">
        
        {/* Modal Top Bar */}
        <div className="bg-slate-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base font-arabic-heading">
                خطاب التظلم الرسمي لإلغاء بلاغ الهروب (مكتب سند ووزارة العمل)
              </h3>
              <p className="text-[11px] text-stone-300 font-mono">
                Official Grievance Letter against Malicious Absconding (DCA-20260802114)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم نسخ الخطاب' : 'نسخ النص'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>طباعة A4</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bengali Action Guidance for Maruf */}
        <div className="bg-amber-50 p-4 border-b border-amber-200 text-amber-950 text-xs space-y-1.5">
          <strong className="block font-bold text-amber-900 text-sm">
            মারুফ ভাইয়ের জন্য সানাদ সেন্টারের নির্দেশনা (Sanad Office Instructions):
          </strong>
          <p className="leading-relaxed">
            সানাদ অফিসে গিয়ে অপারেটরকে বলবেন: <em>&quot;আনা আরিদ্ আসাউই তাযাল্লুম মিন বালাগ হুরুপ&quot; (أنا أريد تقديم تظلم من بلاغ هروب)</em>।
            এই সম্পূর্ণ আরবি দরখাস্তটি সানাদ টাইপিস্টকে দিন। তারা সরকারি পোর্টালে <strong>&quot;تظلم من بلاغ ترك العمل&quot; (Grievance of Desertion)</strong> অপশনে এই রেফারেন্স নম্বরগুলো 
            (<code>DCA-20260802114</code> এবং শ্রম কেস <code>REF2603150080</code>) দিয়ে সাবমিট করে দেবে।
          </p>
        </div>

        {/* The Letter Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Metadata Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs font-mono">
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="text-[10px] text-stone-500 block">رقم بلاغ الهروب الكيدي</span>
              <strong className="text-rose-700 text-xs">{SANAD_GRIEVANCE_LETTER.referenceCode}</strong>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="text-[10px] text-stone-500 block">رقم الشكوى العمالية السابقة</span>
              <strong className="text-emerald-700 text-xs">{SANAD_GRIEVANCE_LETTER.labourComplaintRef}</strong>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="text-[10px] text-stone-500 block">رقم الدعوى بمحكمة بركاء</span>
              <strong className="text-blue-700 text-xs">{SANAD_GRIEVANCE_LETTER.courtCaseNo}</strong>
            </div>
            <div className="p-2.5 bg-stone-50 border border-stone-200 rounded-lg">
              <span className="text-[10px] text-stone-500 block">البلاغ الأول المرفوض</span>
              <strong className="text-stone-700 text-xs">{SANAD_GRIEVANCE_LETTER.previousRejectedRef} (مرفوض)</strong>
            </div>
          </div>

          {/* Letter Prose */}
          <div className="bg-stone-50/70 p-6 rounded-xl border border-stone-300 font-arabic-calligraphy text-stone-900 leading-loose text-sm sm:text-base whitespace-pre-line text-justify shadow-inner">
            {SANAD_GRIEVANCE_LETTER.bodyAr}
          </div>

          {/* Key Legal Grounds Badges */}
          <div className="space-y-2 pt-2 border-t border-stone-200">
            <span className="font-bold text-xs text-stone-800 block">الأسانيد القانونية الحاسمة المرفقة بالتظلم:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SANAD_GRIEVANCE_LETTER.groundsAr.map((g, idx) => (
                <div key={idx} className="p-2 rounded bg-stone-100 border border-stone-200 text-stone-700 flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-1 shrink-0" />
                  <span>{g}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100 p-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-stone-600 font-mono">
            العامل: {CASE_METADATA.workerNameAr} · الرقم المدني: {CASE_METADATA.civilId}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold transition-colors shadow-sm"
            >
              طباعة فورية للمستند (Print)
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg transition-colors font-medium"
            >
              إغلاق
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
