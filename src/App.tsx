import React, { useState } from 'react';
import { SupportedLanguage, AasraResponse, CuratedTopic } from './types';
import { UI_STRINGS, CURATED_TOPICS } from './data/curatedData';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { ResponseView } from './components/ResponseView';
import { AasraSpeaker } from './utils/speech';
import { Sparkles, Loader2, HeartHandshake } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<SupportedLanguage>('ta');
  const [textSize, setTextSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [currentQuery, setCurrentQuery] = useState<string>('');
  const [currentResponse, setCurrentResponse] = useState<AasraResponse | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const strings = UI_STRINGS[language];

  const handleQuerySubmit = async (query: string, targetLang: SupportedLanguage = language, category?: string) => {
    if (!query.trim()) return;

    // Stop any active speech synthesis
    AasraSpeaker.stop();

    setCurrentQuery(query);
    setSelectedTopicId(null);
    setIsLoading(true);
    setErrorMessage(null);
    setCurrentResponse(null);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const res = await fetch('/api/ask-aasra', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          language: targetLang,
          category
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned status: ${res.status}`);
      }

      const data: AasraResponse = await res.json();
      setCurrentResponse(data);
    } catch (err: any) {
      console.error('Failed to get Aasra AI response:', err);
      setErrorMessage(strings.errorTryAgain);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectCuratedTopic = (topic: CuratedTopic) => {
    AasraSpeaker.stop();
    setSelectedTopicId(topic.id);
    const query = topic.popularQuery[language] || topic.popularQuery.en;
    const resp = topic.response[language] || topic.response.en;
    setCurrentQuery(query);
    setCurrentResponse(resp);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    setLanguage(newLang);
    AasraSpeaker.stop();

    // If an active curated topic is currently being viewed, immediately switch its text to the new language
    if (selectedTopicId) {
      const topic = CURATED_TOPICS.find((t) => t.id === selectedTopicId);
      if (topic) {
        setCurrentQuery(topic.popularQuery[newLang] || topic.popularQuery.en);
        setCurrentResponse(topic.response[newLang] || topic.response.en);
        return;
      }
    }

    // If a custom query is displayed, re-fetch it in the newly selected language
    if (currentResponse && currentQuery) {
      handleQuerySubmit(currentQuery, newLang);
    }
  };

  const handleStartAgain = () => {
    AasraSpeaker.stop();
    setCurrentResponse(null);
    setCurrentQuery('');
    setSelectedTopicId(null);
    setErrorMessage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-stone-900 selection:bg-emerald-100 selection:text-emerald-950">
      {/* Top App Bar */}
      <Header
        language={language}
        onLanguageChange={handleLanguageChange}
        textSize={textSize}
        onTextSizeChange={setTextSize}
        onHomeClick={handleStartAgain}
      />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8 pb-12">
        {/* Loading Spinner State */}
        {isLoading && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-emerald-100 flex items-center justify-center text-emerald-700 shadow-md">
                <Loader2 className="w-10 h-10 animate-spin text-emerald-700" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs shadow-xs animate-bounce">
                ✨
              </div>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                {strings.loadingMessage}
              </h3>
              <p className="text-sm text-stone-600 font-medium">
                "{currentQuery}"
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {errorMessage && !isLoading && (
          <div className="mb-6 p-5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div>
              <p className="font-bold text-base">{errorMessage}</p>
              <p className="text-xs text-rose-700 mt-0.5">Please check your connection and tap retry.</p>
            </div>
            <button
              onClick={() => handleQuerySubmit(currentQuery, language)}
              className="px-5 py-2.5 bg-rose-700 text-white rounded-xl font-bold text-sm shadow-xs hover:bg-rose-800 transition-colors"
            >
              {strings.retryButton}
            </button>
          </div>
        )}

        {/* Response View or Home Screen */}
        {!isLoading && currentResponse ? (
          <ResponseView
            response={currentResponse}
            language={language}
            userQuestion={currentQuery}
            textSize={textSize}
            onStartAgain={handleStartAgain}
          />
        ) : !isLoading ? (
          <HomeScreen
            language={language}
            onSelectQuery={(q, cat) => handleQuerySubmit(q, language, cat)}
            onSelectCuratedTopic={handleSelectCuratedTopic}
            isLoading={isLoading}
            textSize={textSize}
          />
        ) : null}
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200 bg-white py-6 px-4 text-center print:hidden">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-stone-600 font-medium">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-emerald-700" />
            <span className="font-bold text-stone-800">Aasra AI</span>
            <span>·</span>
            <span>{strings.tagline}</span>
          </div>
          <p className="text-stone-500 text-xs">
            {strings.footerNote}
          </p>
        </div>
      </footer>
    </div>
  );
}
