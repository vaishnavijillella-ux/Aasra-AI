import React, { useState, useEffect } from 'react';
import { AasraResponse, SupportedLanguage } from '../types';
import { UI_STRINGS } from '../data/curatedData';
import { AasraSpeaker } from '../utils/speech';
import {
  Volume2,
  VolumeX,
  Pause,
  Play,
  RotateCcw,
  Printer,
  ExternalLink,
  Users,
  CheckCircle2,
  FileText,
  ListOrdered,
  Building2,
  AlertTriangle,
  Sparkles,
  CheckSquare,
  Square
} from 'lucide-react';

interface ResponseViewProps {
  response: AasraResponse;
  language: SupportedLanguage;
  userQuestion: string;
  textSize: 'normal' | 'large' | 'xlarge';
  onStartAgain: () => void;
}

export const ResponseView: React.FC<ResponseViewProps> = ({
  response,
  language,
  userQuestion,
  textSize,
  onStartAgain
}) => {
  const strings = UI_STRINGS[language];
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isPausedAudio, setIsPausedAudio] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});

  useEffect(() => {
    // Stop audio on unmount or question change
    return () => {
      AasraSpeaker.stop();
    };
  }, [response]);

  const toggleAudio = () => {
    if (isPlayingAudio && !isPausedAudio) {
      AasraSpeaker.pause();
      setIsPausedAudio(true);
    } else if (isPlayingAudio && isPausedAudio) {
      AasraSpeaker.resume();
      setIsPausedAudio(false);
    } else {
      setIsPlayingAudio(true);
      setIsPausedAudio(false);
      const scriptToSpeak = response.spokenScript || response.simpleAnswer;
      AasraSpeaker.speak(
        scriptToSpeak,
        language,
        () => {
          setIsPlayingAudio(true);
          setIsPausedAudio(false);
        },
        () => {
          setIsPlayingAudio(false);
          setIsPausedAudio(false);
        },
        (err) => {
          console.warn('Audio error:', err);
          setIsPlayingAudio(false);
          setIsPausedAudio(false);
        }
      );
    }
  };

  const stopAudio = () => {
    AasraSpeaker.stop();
    setIsPlayingAudio(false);
    setIsPausedAudio(false);
  };

  const handlePrint = () => {
    window.print();
  };

  const toggleDocChecked = (index: number) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getTextClass = () => {
    if (textSize === 'xlarge') return 'text-xl sm:text-2xl leading-relaxed';
    if (textSize === 'large') return 'text-lg sm:text-xl leading-relaxed';
    return 'text-base sm:text-lg leading-relaxed';
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto pb-12 animate-fadeIn print:m-0 print:p-0">
      {/* Top Banner: Question & Action Buttons */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-200/90 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800">
              {strings.recognizedTextLabel}
            </span>
            <h2 className="text-lg sm:text-2xl font-bold text-stone-900 mt-1">
              "{userQuestion}"
            </h2>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Start Again button */}
            <button
              onClick={onStartAgain}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{strings.startAgainButton}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl text-sm flex items-center gap-2 transition-all active:scale-95 print:hidden"
              title="Print checklist"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{strings.printButton}</span>
            </button>
          </div>
        </div>

        {/* Listen to Answer Bar */}
        <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-teal-500/10 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 ${isPlayingAudio && !isPausedAudio ? 'bg-emerald-600 animate-pulse' : 'bg-emerald-700'}`}>
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <p className="font-bold text-stone-900 text-base sm:text-lg">
                {strings.listenButton}
              </p>
              <p className="text-xs sm:text-sm text-stone-600">
                {isPlayingAudio
                  ? isPausedAudio
                    ? strings.audioPaused
                    : strings.audioSpeaking
                  : strings.audioPrompt}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold rounded-xl text-sm sm:text-base flex items-center gap-2 shadow-md shadow-emerald-800/25 active:scale-98 transition-all"
            >
              {isPlayingAudio && !isPausedAudio ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>{strings.pauseButton}</span>
                </>
              ) : isPausedAudio ? (
                <>
                  <Play className="w-4 h-4" />
                  <span>{strings.resumeButton}</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>{strings.listenButton}</span>
                </>
              )}
            </button>

            {isPlayingAudio && (
              <button
                onClick={stopAudio}
                className="px-3 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 font-semibold rounded-xl text-sm flex items-center gap-1.5 transition-colors"
                title="Stop Audio"
              >
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">{strings.stopVoiceButton}</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Cards Grid */}
      <div className="space-y-5">
        {/* 1. Simple Answer Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-emerald-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-purple-500"></div>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-emerald-950">
              {strings.simpleAnswerTitle}
            </h3>
          </div>
          <p className={`${getTextClass()} font-semibold text-stone-800 bg-emerald-50/50 p-4 sm:p-5 rounded-2xl border border-emerald-100`}>
            {response.simpleAnswer}
          </p>
        </div>

        {/* 2 & 3. Who is it for & Important Eligibility Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Who is it for */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h3 className="text-base sm:text-lg font-bold text-purple-950 flex items-center gap-1.5">
                <Users className="w-5 h-5 text-purple-700" />
                <span>{strings.whoIsItForTitle}</span>
              </h3>
            </div>
            <p className={`${getTextClass()} text-stone-700`}>
              {response.targetBeneficiary}
            </p>
          </div>

          {/* Eligibility Information */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h3 className="text-base sm:text-lg font-bold text-teal-950 flex items-center gap-1.5">
                <CheckCircle2 className="w-5 h-5 text-teal-700" />
                <span>{strings.eligibilityTitle}</span>
              </h3>
            </div>
            <p className={`${getTextClass()} text-stone-700`}>
              {response.eligibilityDetails}
            </p>
          </div>
        </div>

        {/* 4. Required Documents Checklist */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-stone-200 shadow-xs">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
                4
              </div>
              <h3 className="text-base sm:text-xl font-bold text-stone-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-emerald-700" />
                <span>{strings.documentsTitle}</span>
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {strings.checklistBadge}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {response.requiredDocuments.map((doc, idx) => {
              const isChecked = Boolean(checkedDocs[idx]);
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => toggleDocChecked(idx)}
                  className={`text-left p-3.5 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
                    isChecked
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-stone-50/70 border-stone-200 hover:bg-stone-100 text-stone-800'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-700" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-400" />
                    )}
                  </div>
                  <span className={`${getTextClass()} font-medium ${isChecked ? 'line-through opacity-85' : ''}`}>
                    {doc}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Clear Step-by-Step Instructions */}
        <div className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-200/90 shadow-sm">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold text-sm">
              5
            </div>
            <h3 className="text-base sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ListOrdered className="w-5 h-5 text-emerald-700" />
              <span>{strings.stepsTitle}</span>
            </h3>
          </div>

          <div className="space-y-3.5">
            {response.stepByStepGuide.map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-emerald-300 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  {idx + 1}
                </div>
                <p className={`${getTextClass()} text-stone-800 font-medium`}>
                  {step.replace(/^\d+[\.\)]\s*/, '')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Official Government Source / Office */}
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-5 sm:p-7 shadow-md">
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 text-stone-950 flex items-center justify-center font-bold text-sm">
              6
            </div>
            <h3 className="text-base sm:text-xl font-bold flex items-center gap-2">
              <Building2 className="w-5 h-5 text-emerald-400" />
              <span>{strings.officialSourceTitle}</span>
            </h3>
          </div>

          <div className="space-y-3">
            <div className="bg-stone-800/80 p-4 rounded-2xl border border-stone-700">
              <p className="text-xs uppercase tracking-wider text-emerald-400 font-bold mb-1">
                {strings.officialSiteBadge}
              </p>
              <p className="text-base sm:text-lg font-bold text-stone-100">
                {response.officialPortal.name}
              </p>
              {response.officialPortal.officeType && (
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  {strings.inPersonOfficeLabel} <span className="text-emerald-300 font-semibold">{response.officialPortal.officeType}</span>
                </p>
              )}
            </div>

            {response.officialPortal.url && (
              <a
                href={response.officialPortal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md active:scale-98"
              >
                <span>{strings.visitOfficialSite} ({response.officialPortal.url.replace(/^https?:\/\//, '')})</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* 7. Verification & Safety Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 sm:p-6 text-amber-950">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs sm:text-sm font-medium">
              <p className="font-bold text-amber-950">
                {response.verificationNotice}
              </p>
              <p className="text-amber-900">
                {strings.safetyAlert1}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 print:hidden">
          <button
            onClick={onStartAgain}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-800 hover:to-teal-900 text-white font-bold rounded-2xl text-base sm:text-lg shadow-lg shadow-emerald-800/25 flex items-center justify-center gap-2 active:scale-98 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            <span>{strings.startAgainButton}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
