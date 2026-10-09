export type Language = 'ar' | 'bn' | 'en';

export interface CaseMetadata {
  workerNameAr: string;
  workerNameEn: string;
  workerNickname: string;
  civilId: string;
  workPermitNo: string;
  passportStatus: string;
  nationalityAr: string;
  nationalityEn: string;
  employerNameAr: string;
  employerNameEn: string;
  commercialRegNo: string;
  employmentStartDate: string;
  serviceYears: number;
  actualMonthlySalaryOMR: number;
  actualCommissionOMR: number;
  contractRegisteredSalaryOMR: number;
  molComplaintRef: string;
  molComplaintDate: string;
  molNextHearingDate: string;
  sjcCaseNo: string;
  sjcCourtNameAr: string;
  sjcHearingDate: string;
  desertionRefApproved: string;
  desertionSubmitDate: string;
  desertionAllegedDate: string;
  claimedShortageOMR: number;
}

export interface EvidenceDocument {
  id: string;
  exhibitNumber: number;
  titleAr: string;
  titleEn: string;
  category: 'accounting' | 'visa' | 'desertion' | 'penalty' | 'bank' | 'performance' | 'court';
  categoryLabelAr: string;
  documentDate: string;
  referenceCode?: string;
  summaryAr: string;
  shortageRebuttalAr: string;
  legalArgumentAr: string;
  legalArticles: string[];
  keyFigures?: { label: string; value: string; isHighlighted?: boolean }[];
  visualType: 'subledger' | 'cards' | 'desertion' | 'ooredoo' | 'bank' | 'court';
}

export interface FinancialClaim {
  id: string;
  itemNumber: number;
  categoryAr: string;
  categoryEn: string;
  detailsAr: string;
  calculationMethodAr: string;
  amountOMR: number;
  legalArticleOman: string;
  evidenceRef: string;
  isContestedByEmployer: boolean;
}

export interface DesertionTimelinePoint {
  date: string;
  titleAr: string;
  actor: 'worker' | 'employer' | 'authority';
  descriptionAr: string;
  legalImpactAr: string;
  proofBadge: string;
}

export interface SanadGrievanceLetter {
  referenceCode: string;
  previousRejectedRef: string;
  labourComplaintRef: string;
  courtCaseNo: string;
  submissionDate: string;
  allegedDesertionDate: string;
  workerName: string;
  civilId: string;
  workPermitNo: string;
  employerName: string;
  commercialRegNo: string;
  ticketAmountOMR: number;
  subjectAr: string;
  bodyAr: string;
  groundsAr: string[];
  demandsAr: string[];
}

export interface CourtChecklistItem {
  id: string;
  section: string;
  title: string;
  arabicTitle: string;
  description: string;
  requiredCopies: number;
  status: 'ready' | 'pending' | 'verified';
}

export interface CourtSpokenPhrase {
  id: string;
  situationAr: string;
  arabicText: string;
  transliteration: string;
  banglaMeaning: string;
  englishMeaning: string;
  importanceTipAr: string;
}
