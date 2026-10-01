export type SupportedLanguage = 'ta' | 'en' | 'hi' | 'te';

export interface AasraResponse {
  simpleAnswer: string;
  targetBeneficiary: string;
  eligibilityDetails: string;
  requiredDocuments: string[];
  stepByStepGuide: string[];
  officialPortal: {
    name: string;
    url?: string;
    officeType?: string;
  };
  verificationNotice: string;
  spokenScript: string;
  category?: 'schemes' | 'services' | 'skills' | 'general';
  isOfflineFallback?: boolean;
}

export interface CuratedTopic {
  id: string;
  category: 'schemes' | 'services' | 'skills';
  title: Record<SupportedLanguage, string>;
  description: Record<SupportedLanguage, string>;
  popularQuery: Record<SupportedLanguage, string>;
  response: Record<SupportedLanguage, AasraResponse>;
}
