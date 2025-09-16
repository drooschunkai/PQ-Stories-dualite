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
      setVoices(speechSynthesis.getVoices());
    };
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;

    // Cleanup function to cancel speech when component unmounts
    return () => {
      speechSynthesis.cancel();
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  useEffect(() => {
    if (isPlaying && text && voices.length > 0) {
      speechSynthesis.cancel(); // Cancel any previous speech

      const utterance = new SpeechSynthesisUtterance(text);
      
      const langConfig: { [key in Language]: { bcp47: string, voiceName?: RegExp, gender?: string } } = {
        en: { bcp47: 'en-US', voiceName: /narrator|female|zira|samantha/i, gender: 'female' },
        ar: { bcp47: 'ar-SA', voiceName: /female|heda|majed/i, gender: 'female' },
        sv: { bcp47: 'sv-SE', voiceName: /female|sofie|alva/i, gender: 'female' },
        de: { bcp47: 'de-DE', voiceName: /female|katja|anna/i, gender: 'female' },
      };

      const config = langConfig[language];
      utterance.lang = config.bcp47;
      utterance.rate = speed;
      utterance.pitch = 1.1; // Slightly higher pitch for a more engaging storyteller voice
      utterance.volume = 1;

      const filteredVoices = voices.filter(voice => voice.lang.startsWith(language));
      
      let selectedVoice = filteredVoices.find(voice => config.voiceName?.test(voice.name.toLowerCase()));
      if (!selectedVoice) {
        selectedVoice = filteredVoices.find(voice => voice.name.toLowerCase().includes(config.gender || 'female'));
      }
      if (!selectedVoice) {
        selectedVoice = filteredVoices[0];
      }
      
      utterance.voice = selectedVoice || null;

      utterance.onend = () => {
        if (isPlaying) {
          onTogglePlay(); // This will set isPlaying to false
        }
      };
      
      utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        if (isPlaying) {
          onTogglePlay();
        }
      };

      utteranceRef.current = utterance;
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
    }

    // This cleanup function is crucial to stop speech when isPlaying becomes false
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
