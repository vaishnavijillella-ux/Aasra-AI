import React, { useState } from 'react';
import { SupportedLanguage, CuratedTopic } from '../types';
import { UI_STRINGS, SAMPLE_QUESTIONS, CURATED_TOPICS } from '../data/curatedData';
import { VoiceInputSection } from './VoiceInputSection';
import { SafetyBanner } from './SafetyBanner';
import {
  Landmark,
  FileCheck2,
  Sparkles,
  ArrowRight,
  Send,
  HelpCircle,
  Lightbulb,
  CheckCircle,
  Scissors
} from 'lucide-react';

interface HomeScreenProps {
  language: SupportedLanguage;
  onSelectQuery: (query: string, category?: string) => void;
  onSelectCuratedTopic: (topic: CuratedTopic) => void;
  isLoading: boolean;
  textSize: 'normal' | 'large' | 'xlarge';
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  onSelectQuery,
  onSelectCuratedTopic,
  isLoading,
  textSize
}) => {
  const strings = UI_STRINGS[language];
  const [textInput, setTextInput] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<'all' | 'schemes' | 'services' | 'skills'>('all');

  const sampleQuestions = SAMPLE_QUESTIONS[language] || SAMPLE_QUESTIONS.ta;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && !isLoading) {
      onSelectQuery(textInput.trim());
      setTextInput('');
    }
  };

  const handleCategoryClick = (cat: 'schemes' | 'services' | 'skills') => {
    setActiveCategoryFilter(cat);
    // Find matching curated topic or sample question
    const matchingTopic = CURATED_TOPICS.find((t) => t.category === cat);
    if (matchingTopic) {
      // scroll to questions or show category
    }
  };

  const filteredTopics = activeCategoryFilter === 'all'
    ? CURATED_TOPICS
    : CURATED_TOPICS.filter((t) => t.category === activeCategoryFilter);

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-16">
      {/* Hero Welcome Banner */}
      <section className="text-center space-y-3 pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300/80 text-xs sm:text-sm font-bold shadow-xs">
          <Sparkles className="w-4 h-4 text-emerald-700" />
          <span>{strings.heroBadge}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-stone-900 tracking-tight">
          Aasra <span className="text-emerald-700">AI</span>
        </h1>

        <p className="text-lg sm:text-2xl font-bold text-stone-700 max-w-2xl mx-auto">
          "{strings.tagline}"
        </p>

        <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto font-medium">
          {strings.chooseHelpPrompt}
        </p>
      </section>

      {/* Safety Reminder Banner */}
      <SafetyBanner language={language} />

      {/* 3 Large Category Options */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-600">
            {strings.chooseCategoryHeader}
          </h2>
          {activeCategoryFilter !== 'all' && (
            <button
              onClick={() => setActiveCategoryFilter('all')}
              className="text-xs font-bold text-emerald-800 hover:underline cursor-pointer"
            >
              {strings.showAll}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* 1. Government Schemes */}
          <button
            type="button"
            onClick={() => handleCategoryClick('schemes')}
            className={`group relative text-left p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer shadow-sm active:scale-98 flex flex-col justify-between min-h-[170px] ${
              activeCategoryFilter === 'schemes'
                ? 'bg-emerald-50 border-emerald-600 ring-2 ring-emerald-600/30 shadow-md'
                : 'bg-white border-stone-200 hover:border-emerald-500 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
                <Landmark className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-emerald-800 transition-colors">
                1. {strings.schemesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 line-clamp-2">
                {strings.schemesDesc}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <span>{strings.openCategory}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 2. Government Services */}
          <button
            type="button"
            onClick={() => handleCategoryClick('services')}
            className={`group relative text-left p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer shadow-sm active:scale-98 flex flex-col justify-between min-h-[170px] ${
              activeCategoryFilter === 'services'
                ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-600/30 shadow-md'
                : 'bg-white border-stone-200 hover:border-teal-500 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-teal-800 transition-colors">
                2. {strings.servicesTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 line-clamp-2">
                {strings.servicesDesc}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-teal-700">
              <span>{strings.openCategory}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

          {/* 3. Skill Learning */}
          <button
            type="button"
            onClick={() => handleCategoryClick('skills')}
            className={`group relative text-left p-5 sm:p-6 rounded-3xl border-2 transition-all cursor-pointer shadow-sm active:scale-98 flex flex-col justify-between min-h-[170px] ${
              activeCategoryFilter === 'skills'
                ? 'bg-purple-50 border-purple-600 ring-2 ring-purple-600/30 shadow-md'
                : 'bg-white border-stone-200 hover:border-purple-500 hover:shadow-md'
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-xs">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-purple-800 transition-colors">
                3. {strings.skillsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 line-clamp-2">
                {strings.skillsDesc}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-purple-700">
              <span>{strings.openCategory}</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </section>

      {/* VOICE INPUT SECTION */}
      <section className="space-y-2">
        <VoiceInputSection
          language={language}
          onConfirmQuery={(q) => onSelectQuery(q, activeCategoryFilter !== 'all' ? activeCategoryFilter : undefined)}
          isLoading={isLoading}
        />
      </section>

      {/* TEXT INPUT SECTION */}
      <section className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-sm">
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <label htmlFor="question-input" className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-700">
            {strings.orTypePrompt}
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="question-input"
              type="text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              placeholder={strings.typePlaceholder}
              disabled={isLoading}
              className="flex-1 text-base sm:text-lg font-medium text-stone-900 px-5 py-4 rounded-2xl bg-stone-50 border-2 border-stone-200 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={isLoading || !textInput.trim()}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white font-bold rounded-2xl text-base sm:text-lg flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 active:scale-98 transition-all shrink-0 cursor-pointer disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              <span>{strings.askButton}</span>
            </button>
          </div>
        </form>
      </section>

      {/* CURATED POPULAR GUIDES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-700" />
          <h2 className="text-base sm:text-lg font-bold text-stone-900">
            {strings.verifiedGuidesHeader}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectCuratedTopic(topic)}
              className="group text-left p-4 sm:p-5 rounded-2xl bg-white border border-stone-200 hover:border-emerald-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                  {topic.category === 'schemes' ? strings.schemesTitle : topic.category === 'services' ? strings.servicesTitle : strings.skillsTitle}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 group-hover:text-emerald-700 mt-2">
                  {topic.title[language] || topic.title.en}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 line-clamp-2">
                  {topic.description[language] || topic.description.en}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                <span>{strings.readGuide}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* EXAMPLE QUESTIONS (CLICKABLE) */}
      <section className="bg-stone-100/70 rounded-3xl p-5 sm:p-7 border border-stone-200/90 space-y-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-700" />
          <h2 className="text-base sm:text-lg font-bold text-stone-900">
            {strings.exampleQuestionsHeader}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectQuery(q)}
              className="text-left px-4 py-3 bg-white hover:bg-emerald-50 hover:border-emerald-300 text-stone-800 hover:text-emerald-950 font-semibold rounded-2xl border border-stone-200 text-xs sm:text-sm shadow-xs transition-all active:scale-98 cursor-pointer flex items-center gap-2"
            >
              <Lightbulb className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{q}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
