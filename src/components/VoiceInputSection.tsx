import React, { useState, useEffect, useRef } from 'react';
import { SupportedLanguage } from '../types';
import { UI_STRINGS } from '../data/curatedData';
import { createSpeechRecognizer, isSpeechRecognitionSupported } from '../utils/speech';
import { Mic, MicOff, Check, RotateCcw, AlertCircle } from 'lucide-react';

interface VoiceInputProps {
  language: SupportedLanguage;
  onConfirmQuery: (query: string) => void;
  isLoading: boolean;
}

export const VoiceInputSection: React.FC<VoiceInputProps> = ({
  language,
  onConfirmQuery,
  isLoading
}) => {
  const strings = UI_STRINGS[language];
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [speechError, setSpeechError] = useState<string | null>(null);
  const [isSupported, setIsSupported] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    setIsSupported(isSpeechRecognitionSupported());
  }, []);

  const startListening = () => {
    setSpeechError(null);
    setRecognizedText('');

    if (!isSupported) {
      setSpeechError(strings.speechNotSupported);
      return;
    }

    try {
      const recognizer = createSpeechRecognizer(
        language,
        (transcript: string, _isFinal: boolean) => {
          setRecognizedText(transcript);
        },
        (error: string) => {
          setSpeechError(error);
          setIsListening(false);
        },
        () => {
          setIsListening(false);
        }
      );

      if (recognizer) {
        recognitionRef.current = recognizer;
        recognizer.start();
        setIsListening(true);
      }
    } catch (err: any) {
      console.error('Speech recognition start failed:', err);
      setSpeechError(strings.micPermissionDenied);
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (e) {
        console.error(e);
      }
    }
    setIsListening(false);
  };

  const handleConfirm = () => {
    if (recognizedText.trim()) {
      onConfirmQuery(recognizedText.trim());
      setRecognizedText('');
    }
  };

  const handleSpeakAgain = () => {
    setRecognizedText('');
    startListening();
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-purple-50/40 rounded-3xl p-5 sm:p-7 border-2 border-emerald-200/80 shadow-md">
      <div className="flex flex-col items-center text-center">
        {/* Main Microphone Button */}
        {!isListening ? (
          <button
            onClick={startListening}
            disabled={isLoading}
            className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white rounded-2xl shadow-lg shadow-emerald-700/25 active:scale-98 transition-all cursor-pointer font-bold text-lg sm:text-xl border-2 border-emerald-500/30"
          >
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mic className="w-6 h-6 text-white" />
            </div>
            <span>{strings.speakButton}</span>
          </button>
        ) : (
          <div className="w-full flex flex-col items-center">
            {/* Listening State with Wave Animation */}
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full bg-rose-500/20 animate-ping absolute inset-0"></div>
              <div className="w-20 h-20 rounded-full bg-rose-600 flex items-center justify-center text-white relative shadow-xl shadow-rose-600/30">
                <Mic className="w-10 h-10 animate-pulse" />
              </div>
            </div>

            <p className="text-base sm:text-lg font-bold text-rose-700 mb-1 animate-pulse">
              {strings.listening}
            </p>
            <p className="text-xs sm:text-sm text-stone-600 mb-4 max-w-sm">
              {strings.speakHelp}
            </p>

            <button
              onClick={stopListening}
              className="px-6 py-2.5 bg-stone-900 text-white hover:bg-stone-800 font-semibold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              {strings.stopListening}
            </button>
          </div>
        )}

        <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium">
          {!isListening && strings.speakHelp}
        </p>

        {/* Error message */}
        {speechError && (
          <div className="mt-4 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs sm:text-sm flex items-center gap-2 text-left w-full max-w-md">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{speechError}</span>
          </div>
        )}

        {/* Recognized Transcript Confirmation Box (Crucial user requirement: Display recognized text before sending) */}
        {recognizedText && !isListening && (
          <div className="mt-5 w-full max-w-xl bg-white rounded-2xl p-4 sm:p-5 border-2 border-emerald-400 shadow-lg text-left transition-all">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-800">
                {strings.recognizedTextLabel}
              </span>
              <span className="text-xs font-semibold text-stone-500">
                {strings.editQueryPrompt}
              </span>
            </div>

            <textarea
              value={recognizedText}
              onChange={(e) => setRecognizedText(e.target.value)}
              rows={2}
              className="w-full text-base sm:text-lg font-medium text-stone-900 p-3 bg-stone-50 rounded-xl border border-stone-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-600 resize-none"
            />

            <div className="mt-3 flex flex-col sm:flex-row items-center justify-end gap-2.5">
              <button
                type="button"
                onClick={handleSpeakAgain}
                className="w-full sm:w-auto px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{strings.speakAgain}</span>
              </button>

              <button
                type="button"
                onClick={handleConfirm}
                disabled={isLoading || !recognizedText.trim()}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-700/20 active:scale-98 transition-all"
              >
                <Check className="w-5 h-5" />
                <span>{strings.recognizedConfirm}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
