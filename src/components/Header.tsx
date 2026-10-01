import React from 'react';
import { SupportedLanguage } from '../types';
import { UI_STRINGS } from '../data/curatedData';
import { Sparkles, Globe, Volume2, Shield } from 'lucide-react';

interface HeaderProps {
  language: SupportedLanguage;
  onLanguageChange: (lang: SupportedLanguage) => void;
  textSize: 'normal' | 'large' | 'xlarge';
  onTextSizeChange: (size: 'normal' | 'large' | 'xlarge') => void;
  onHomeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  textSize,
  onTextSizeChange,
  onHomeClick
}) => {
  const strings = UI_STRINGS[language];

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Brand & Tagline */}
        <button
          onClick={onHomeClick}
          className="flex items-center gap-3 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1 transition-transform active:scale-98"
          title="Go to Aasra AI Home"
        >
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:shadow-emerald-700/30 transition-shadow">
            <span className="text-2xl font-bold tracking-tight">{strings.logoLetter}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-stone-900">
                Aasra <span className="text-emerald-700">AI</span>
              </span>
              <span className="hidden sm:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                {strings.headerBadge}
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-stone-600">
              {strings.tagline}
            </p>
          </div>
        </button>

        {/* Controls: Language & Accessibility Font Size */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
          {/* Language Switcher Buttons */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200">
            <button
              onClick={() => onLanguageChange('ta')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                language === 'ta'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              aria-label="Change language to Tamil"
            >
              தமிழ்
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                language === 'en'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              aria-label="Change language to English"
            >
              English
            </button>
            <button
              onClick={() => onLanguageChange('hi')}
              className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                language === 'hi'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              aria-label="Change language to Hindi"
            >
              हिंदी
            </button>
            <button
              onClick={() => onLanguageChange('te')}
              className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                language === 'te'
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
              aria-label="Change language to Telugu"
            >
              తెలుగు
            </button>
          </div>

          {/* Text Size Accessibility Toggle */}
          <div className="flex items-center bg-stone-100 p-1 rounded-xl border border-stone-200" title="Text Size">
            <button
              onClick={() => onTextSizeChange('normal')}
              className={`px-2 py-1 rounded-md text-xs font-bold ${
                textSize === 'normal' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Normal text"
            >
              A
            </button>
            <button
              onClick={() => onTextSizeChange('large')}
              className={`px-2 py-1 rounded-md text-sm font-bold ${
                textSize === 'large' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Larger text"
            >
              A+
            </button>
            <button
              onClick={() => onTextSizeChange('xlarge')}
              className={`px-2 py-1 rounded-md text-base font-bold ${
                textSize === 'xlarge' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-500 hover:text-stone-800'
              }`}
              title="Extra large text"
            >
              A++
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
