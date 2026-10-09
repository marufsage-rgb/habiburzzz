import React from 'react';
import { QrCode, ExternalLink, ShieldCheck, Folder, Lock, CheckCircle2, FileText, Database } from 'lucide-react';
import { CASE_METADATA } from '../data/legalCaseData';
import { Language } from '../types/legal';

interface DriveEvidenceTabletProps {
  lang: Language;
}

export const DriveEvidenceTablet: React.FC<DriveEvidenceTabletProps> = ({ lang }) => {
  const driveMainUrl = "https://drive.google.com/drive/folders/1BrPWN6UxqpvMnUDymhTfxKlpptLqrALc?usp=sharing";
  
  // Real working QR code SVG generation for the user's Google Drive URL
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(driveMainUrl)}&margin=4`;

  const years = [
    { year: '2018', link: 'https://drive.google.com/drive/folders/1BXux5a9Uh57yOfz6YCjjtlfqKkMyh4_z?usp=drive_link' },
    { year: '2019', link: 'https://drive.google.com/drive/folders/19teRKlvVxHMh-yh357wFaL9J--XNWhNb?usp=drive_link' },
    { year: '2021', link: 'https://drive.google.com/drive/folders/1EV-NtBLsuPnQk8S4kBH35-vdyPskNaxC?usp=drive_link' },
    { year: '2022', link: 'https://drive.google.com/drive/folders/1CjkxAXnXSJF4SfITdcNnn_pq4JPj6E2A?usp=drive_link' },
    { year: '2023', link: 'https://drive.google.com/drive/folders/1NEOtCIVOqZ84vNcitGgrcAfmr86WzfYh?usp=drive_link' },
    { year: '2024', link: 'https://drive.google.com/drive/folders/1XdOXNcLnBTCo6OsjXVz-g15RivZ1uJ08?usp=drive_link' },
    { year: '2025', link: 'https://drive.google.com/drive/folders/1uhBUWBPAryIa1mhFa_B3maWMud_faznQ?usp=drive_link' },
    { year: '2026', link: 'https://drive.google.com/drive/folders/19tKV2xN3GoXt9-PNuNhW4hDgA3_5I3nq?usp=drive_link' },
  ];

  return (
    <div className="bg-stone-900 rounded-2xl p-4 sm:p-6 border-4 border-stone-800 shadow-2xl text-stone-100">
      {/* Tablet Bezel & Header */}
      <div className="bg-white text-slate-900 rounded-xl p-5 sm:p-7 space-y-6 shadow-inner font-sans border border-stone-200">
        
        {/* Header Bar */}
        <div className="border-b-2 border-blue-900 pb-4 text-center space-y-1">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-wide text-blue-950 uppercase font-sans">
            EVIDENCE ARCHIVE: MARUF VS AL YARMOOK TRADING LLC
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700 pt-1 font-mono">
            <span>Barka Court Case No: <strong className="text-blue-900 font-bold">{CASE_METADATA.sjcCaseNo}</strong></span>
            <span>·</span>
            <span>MOL Complaint Ref: <strong className="text-blue-900 font-bold">{CASE_METADATA.molComplaintRef}</strong></span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Col: Main Drive Folders Representation */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50 to-indigo-50/70 p-5 rounded-2xl border-2 border-blue-200 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <span className="font-bold text-sm text-blue-950 font-sans">
                  2018 to 2026 Evidence Folders
                </span>
              </div>
              <span className="text-[10px] bg-blue-200/80 text-blue-900 font-bold px-2 py-0.5 rounded font-mono">
                Google Drive Cloud
              </span>
            </div>

            {/* Folder Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {years.map((y) => (
                <a
                  key={y.year}
                  href={y.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-white border border-blue-200 hover:border-blue-500 hover:bg-blue-100/50 transition-colors group"
                >
                  <span className="flex items-center gap-1.5 font-bold text-slate-800">
                    <Folder className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
                    <span>{y.year} Records</span>
                  </span>
                  <ExternalLink className="w-3 h-3 text-stone-400 group-hover:text-blue-600" />
                </a>
              ))}
            </div>

            <a
              href={driveMainUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
            >
              <span>فتح مجلد الأرشيف السحابي بالكامل (Open Drive)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Center Col: Evidence Categories */}
          <div className="lg:col-span-4 space-y-3 font-sans text-xs">
            {/* Box 1: Bank Muscat WPS */}
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-700 text-white flex items-center justify-center font-bold font-serif shrink-0">
                WPS
              </div>
              <div>
                <strong className="block text-slate-900 font-bold">Bank Muscat WPS 250 OMR</strong>
                <span className="text-stone-600 text-[11px]">Monthly deposits disproving 60 OMR claim</span>
              </div>
            </div>

            {/* Box 2: Civil ID */}
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-800 text-white flex items-center justify-center font-bold shrink-0">
                ID
              </div>
              <div>
                <strong className="block text-slate-900 font-bold">Civil ID: {CASE_METADATA.civilId}</strong>
                <span className="text-stone-600 text-[11px]">Work Permit: {CASE_METADATA.workPermitNo}</span>
              </div>
            </div>

            {/* Box 3: Sales Manager Record */}
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold shrink-0">
                53K
              </div>
              <div>
                <strong className="block text-slate-900 font-bold">Branch Sales (53,000 OMR/mo)</strong>
                <span className="text-stone-600 text-[11px]">Barka aluminium & glass sales archives</span>
              </div>
            </div>

            {/* Box 4: Ooredoo Bills */}
            <div className="p-3.5 rounded-xl border border-stone-200 bg-stone-50 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold shrink-0">
                TEL
              </div>
              <div>
                <strong className="block text-slate-900 font-bold">Ooredoo Bill & Deductions (217 OMR)</strong>
                <span className="text-stone-600 text-[11px]">Commercial line penalty deducted from salary</span>
              </div>
            </div>
          </div>

          {/* Right Col: QR Code Card */}
          <div className="lg:col-span-3 text-center bg-stone-50 p-5 rounded-2xl border-2 border-stone-300 space-y-3">
            <div className="bg-white p-2.5 rounded-xl border border-stone-300 inline-block shadow-sm">
              <img
                src={qrSvgUrl}
                alt="QR Code for Google Drive Evidence Archive"
                className="w-36 h-36 mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-bold text-slate-900 block uppercase font-mono tracking-wider">
                SCAN TO ACCESS GOOGLE DRIVE FOLDER
              </span>
              <div className="inline-flex items-center gap-1 text-[10px] text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                <Lock className="w-3 h-3 text-emerald-700" />
                <span>SECURE ACCESS · وصول مؤمن للقاضي</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info in tablet */}
        <div className="pt-3 border-t border-stone-200 flex flex-wrap items-center justify-between text-[11px] text-stone-500 font-mono">
          <span>Date of Evidence Filing: September 2026</span>
          <span className="text-blue-900 font-bold">Barka Primary Court — Judicial Council of Oman</span>
        </div>
      </div>
    </div>
  );
};
