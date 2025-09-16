import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  text: string;
  speed?: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  isPlaying, 
  onTogglePlay, 
  text,
  speed = 0.95
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const { language, t } = useLanguage();
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      }
    };
    
    // Voices can load asynchronously. We need to check and listen for changes.
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      speechSynthesis.cancel();
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (isPlaying && text && voices.length > 0) {
      speechSynthesis.cancel(); // Clear any previous speech

      const utterance = new SpeechSynthesisUtterance(text);
      
      const langConfig: { [key in Language]: { bcp47: string, voiceNameRegex?: RegExp } } = {
        en: { bcp47: 'en-US', voiceNameRegex: /narrator|female|zira|samantha/i },
        ar: { bcp47: 'ar-SA', voiceNameRegex: /female|heda|majed/i },
        sv: { bcp47: 'sv-SE', voiceNameRegex: /female|sofie|alva/i },
        de: { bcp47: 'de-DE', voiceNameRegex: /female|katja|anna/i },
      };

      const config = langConfig[language];
      utterance.lang = config.bcp47;
      utterance.rate = speed;
      utterance.pitch = 1.1;
      utterance.volume = 1;

      const findBestVoice = (): SpeechSynthesisVoice | null => {
        const langVoices = voices.filter(v => v.lang.startsWith(language));
        if (langVoices.length === 0) return null;

        // Priority 1: A default voice for the language
        let voice = langVoices.find(v => v.default);
        if (voice) return voice;

        // Priority 2: A voice matching a known good name
        if (config.voiceNameRegex) {
          voice = langVoices.find(v => config.voiceNameRegex!.test(v.name));
          if (voice) return voice;
        }

        // Priority 3: A female voice
        voice = langVoices.find(v => v.name.toLowerCase().includes('female'));
        if (voice) return voice;

        // Priority 4: The first available voice for the language
        return langVoices[0];
      };

      const selectedVoice = findBestVoice();
      utterance.voice = selectedVoice;

      if (!selectedVoice) {
          console.warn(`No dedicated voice found for language: ${language}. The browser will attempt to use its default mechanism, which may fall back to English.`);
      }

      utterance.onend = () => {
        if (isPlaying) {
          onTogglePlay(); // Automatically toggle off when done
        }
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror:', event);
        if (isPlaying) {
          onTogglePlay(); // Toggle off on error
        }
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);

    } else if (!isPlaying) {
      speechSynthesis.cancel();
    }

    // Cleanup function to stop speech when component unmounts or dependencies change
    return () => {
      if (utteranceRef.current) {
        utteranceRef.current.onend = null;
        utteranceRef.current.onerror = null;
      }
      speechSynthesis.cancel();
    };
  }, [isPlaying, text, voices, language, speed, onTogglePlay]);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <button
          onClick={onTogglePlay}
          className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 transition-all text-white shadow-lg flex-shrink-0"
          aria-label={isPlaying ? 'Pause narration' : 'Play narration'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5 rtl:ml-0 rtl:mr-0.5" />}
        </button>
        
        <div className="flex-1 flex items-center space-x-2 rtl:space-x-reverse min-w-0">
          <Volume2 size={16} className="text-gray-500 flex-shrink-0" />
          <div className="text-left rtl:text-right min-w-0">
            <p className="text-sm font-medium text-gray-700 truncate">
              {isPlaying ? t('playing_story') : t('listen_story')}
            </p>
            <p className="text-xs text-gray-500">
              {t('narrated_in')} {t(language)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
