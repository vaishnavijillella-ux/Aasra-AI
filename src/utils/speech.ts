import { SupportedLanguage } from '../types';

export const LANGUAGE_LOCALE_MAP: Record<SupportedLanguage, string> = {
  ta: 'ta-IN',
  en: 'en-IN',
  hi: 'hi-IN',
  te: 'te-IN'
};

export const LANGUAGE_NAMES: Record<SupportedLanguage, { native: string; english: string }> = {
  ta: { native: 'தமிழ்', english: 'Tamil' },
  en: { native: 'English', english: 'English' },
  hi: { native: 'हिंदी', english: 'Hindi' },
  te: { native: 'తెలుగు', english: 'Telugu' }
};

export function isSpeechRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
}

export function createSpeechRecognizer(
  language: SupportedLanguage,
  onResult: (transcript: string, isFinal: boolean) => void,
  onError: (error: string) => void,
  onEnd: () => void
) {
  if (!isSpeechRecognitionSupported()) {
    onError('Speech recognition not supported');
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SpeechRecognitionConstructor = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  const recognition = new SpeechRecognitionConstructor();

  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = LANGUAGE_LOCALE_MAP[language] || 'ta-IN';
  recognition.maxAlternatives = 1;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onresult = (event: any) => {
    let interim = '';
    let finalTranscript = '';

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcriptPiece = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcriptPiece;
      } else {
        interim += transcriptPiece;
      }
    }

    const currentText = (finalTranscript || interim).trim();
    if (currentText) {
      onResult(currentText, Boolean(finalTranscript));
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  recognition.onerror = (event: any) => {
    const errorType = event.error;
    if (errorType === 'not-allowed') {
      onError('Microphone permission was denied. Please allow microphone access in your browser.');
    } else if (errorType === 'no-speech') {
      onError('No speech was detected. Please try speaking closer to the microphone.');
    } else {
      onError(`Speech recognition error: ${errorType}`);
    }
  };

  recognition.onend = () => {
    onEnd();
  };

  return recognition;
}

// Text-to-speech helper
export class AasraSpeaker {
  private static utterance: SpeechSynthesisUtterance | null = null;

  public static speak(
    text: string,
    language: SupportedLanguage,
    onStart?: () => void,
    onEnd?: () => void,
    onError?: (err: string) => void
  ) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      if (onError) onError('Speech synthesis is not supported on this browser.');
      return;
    }

    // Stop existing speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    const targetLang = LANGUAGE_LOCALE_MAP[language];
    utterance.lang = targetLang;
    utterance.rate = 0.92; // Slightly measured rate for crystal clarity
    utterance.pitch = 1.0;

    // Pick best matching voice if available
    const voices = window.speechSynthesis.getVoices();
    const matchedVoice = voices.find(v => v.lang === targetLang || v.lang.startsWith(targetLang.split('-')[0]));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      if (onStart) onStart();
    };

    utterance.onend = () => {
      this.utterance = null;
      if (onEnd) onEnd();
    };

    utterance.onerror = (event) => {
      this.utterance = null;
      if (event.error !== 'interrupted' && event.error !== 'canceled') {
        if (onError) onError('Speech playback encountered an issue.');
      }
      if (onEnd) onEnd();
    };

    this.utterance = utterance;
    window.speechSynthesis.speak(utterance);
  }

  public static pause() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
  }

  public static resume() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
    }
  }

  public static stop() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.utterance = null;
  }

  public static isSpeaking(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return window.speechSynthesis.speaking;
  }

  public static isPaused(): boolean {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    return window.speechSynthesis.paused;
  }
}
