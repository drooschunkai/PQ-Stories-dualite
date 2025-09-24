import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  text: string;
  audioUrl?: string;
  speed?: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  isPlaying, 
  onTogglePlay, 
  text,
  audioUrl,
  speed = 0.95
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const { language, t } = useLanguage();
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Effect to load TTS voices (only if needed for fallback)
  useEffect(() => {
    if (!audioUrl) {
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        if (availableVoices.length > 0) {
          setVoices(availableVoices);
        }
      };
      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
      return () => {
        speechSynthesis.onvoiceschanged = null;
      };
    }
  }, [audioUrl]);

  // Main playback effect
  useEffect(() => {
    // Priority 1: Use pre-recorded audio if URL is available
    if (audioUrl && audioRef.current) {
      const audio = audioRef.current;
      if (isPlaying) {
        audio.play().catch(e => console.error("Audio play error:", e));
      } else {
        audio.pause();
      }
      // Ensure TTS is stopped
      speechSynthesis.cancel();
    } 
    // Priority 2: Fallback to Text-to-Speech
    else if (!audioUrl) {
      if (isPlaying && text && voices.length > 0) {
        speechSynthesis.cancel();

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
          let voice = langVoices.find(v => v.default);
          if (voice) return voice;
          if (config.voiceNameRegex) {
            voice = langVoices.find(v => config.voiceNameRegex!.test(v.name));
            if (voice) return voice;
          }
          voice = langVoices.find(v => v.name.toLowerCase().includes('female'));
          if (voice) return voice;
          return langVoices[0];
        };

        utterance.voice = findBestVoice();
        utterance.onend = () => isPlaying && onTogglePlay();
        utterance.onerror = (event) => {
          console.error('SpeechSynthesisUtterance.onerror:', event);
          isPlaying && onTogglePlay();
        };

        utteranceRef.current = utterance;
        speechSynthesis.speak(utterance);
      } else {
        speechSynthesis.cancel();
      }
    }

  }, [isPlaying, audioUrl, text, voices, language, speed, onTogglePlay]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      speechSynthesis.cancel();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
      {audioUrl && <audio ref={audioRef} src={audioUrl} onEnded={onTogglePlay} preload="metadata" />}
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
              {audioUrl ? t('narrated_by_human') : `${t('narrated_in')} ${t(language)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
