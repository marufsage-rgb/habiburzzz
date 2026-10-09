import React, { useState } from 'react';
import { Volume2, Copy, Check, MessageSquare, Shield, HelpCircle, Sparkles } from 'lucide-react';
import { COURT_SPOKEN_PHRASES } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface VerbalDefenseAssistantProps {
  lang: Language;
}

export const VerbalDefenseAssistant: React.FC<VerbalDefenseAssistantProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-stone-900 text-white rounded-xl p-6 border border-stone-800 shadow-sm space-y-2">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
          <MessageSquare className="w-4 h-4" />
          <span>دليل الكلمات والمرافعة الشفهية أمام القاضي والمحقق العمالي</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold font-arabic-heading text-stone-100">
          {lang === 'ar'
            ? 'ماذا يقول العامل شفهياً أمام القاضي في جلسة المحكمة؟'
            : lang === 'bn'
            ? 'বিচারকের সামনে মুখে কী কী বলবেন (আরবি ও বাংলা উচ্চারণসহ)'
            : 'What to Say Verbally Before the Labour Judge (Arabic & Transliteration)'}
        </h2>
        <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-4xl font-sans">
          {lang === 'ar'
            ? 'عبارات قانونية دقيقة وموجزة صممت خصيصاً ليقولها الأخ حبيب الرحمن أمام قاضي الدائرة العمالية، مصحوبة بالنطق الصوتي والمعنى باللغة البنغالية والإنجليزية لضمان الثقة والوضوح التام.'
            : 'কোর্টে বা শ্রম অফিসে বিচারকের সামনে নার্ভাস না হয়ে আত্মবিশ্বাসের সাথে এই কথাগুলো বলবেন। প্রতিটি আরবি বাক্যের নিচে বাংলা উচ্চারণ ও অর্থ দেওয়া আছে।'}
        </p>
      </div>

      {/* Grid of Spoken Defense Cards */}
      <div className="space-y-4">
        {COURT_SPOKEN_PHRASES.map((phrase, idx) => (
          <div
            key={phrase.id}
            className="bg-white rounded-xl border border-stone-200 p-5 shadow-sm space-y-3 transition-all hover:border-amber-400"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-xs font-mono">
                  {idx + 1}
                </span>
                <span className="font-bold text-xs text-stone-800 font-sans">
                  الموقف / الحالة: {phrase.situationAr}
                </span>
              </div>

              <button
                onClick={() => handleCopy(phrase.id, phrase.arabicText)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-mono transition-colors"
                title="نسخ العبارة العربية"
              >
                {copiedId === phrase.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold">تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>نسخ</span>
                  </>
                )}
              </button>
            </div>

            {/* The Arabic Spoken Text */}
            <div className="p-4 bg-amber-50/50 rounded-xl border border-amber-200 text-right">
              <p className="text-lg sm:text-xl font-bold font-arabic-calligraphy text-slate-950 leading-relaxed">
                &quot;{phrase.arabicText}&quot;
              </p>
            </div>

            {/* Transliteration & Translations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-sans text-xs pt-1">
              {/* Transliteration */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <span className="text-[10px] text-stone-500 font-mono block uppercase">نطق العبارة بالحروف اللاتينية (Pronunciation)</span>
                <p className="text-stone-800 font-mono text-[11px] leading-relaxed italic">
                  {phrase.transliteration}
                </p>
              </div>

              {/* Bengali Meaning */}
              <div className="p-3 bg-stone-50 rounded-lg border border-stone-200 space-y-1">
                <span className="text-[10px] text-stone-500 font-mono block uppercase">অর্থ (বাংলা)</span>
                <p className="text-stone-800 leading-relaxed font-medium">
                  {phrase.banglaMeaning}
                </p>
              </div>
            </div>

            {/* Tactical Tip */}
            <div className="text-[11px] text-amber-900 bg-amber-50/70 px-3 py-2 rounded-lg border border-amber-200 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-700 shrink-0" />
              <span><strong>نصيحة تكتيكية أثناء الجلسة: </strong>{phrase.importanceTipAr}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
