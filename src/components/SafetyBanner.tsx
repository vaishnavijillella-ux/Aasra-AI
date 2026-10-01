import React from 'react';
import { SupportedLanguage } from '../types';
import { UI_STRINGS } from '../data/curatedData';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

interface SafetyBannerProps {
  language: SupportedLanguage;
}

export const SafetyBanner: React.FC<SafetyBannerProps> = ({ language }) => {
  const strings = UI_STRINGS[language];

  return (
    <div className="w-full bg-amber-50/90 border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-100 text-amber-900 shrink-0 mt-0.5">
          <ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <div className="space-y-1.5 text-xs sm:text-sm">
          <p className="font-bold text-amber-950 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {strings.safetyAlert1}
          </p>
          <p className="text-amber-900/90 font-medium">
            {strings.safetyAlert2}
          </p>
        </div>
      </div>
    </div>
  );
};
