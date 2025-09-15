import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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
  speed = 0.8 
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (isPlaying && text) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = speed;
      utterance.pitch = 1;
      utterance.volume = 1;
      
      utterance.onstart = () => {
        setDuration(text.length * 50); // Rough estimation
      };
      
      utterance.onend = () => {
        onTogglePlay();
        setCurrentPosition(0);
      };

      utterance.onboundary = (event) => {
        setCurrentPosition(event.charIndex);
      };

      speechRef.current = utterance;
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
    }

    return () => {
      speechSynthesis.cancel();
    };
  }, [isPlaying, text, speed, onTogglePlay]);

  const handleSkip = (direction: 'forward' | 'backward') => {
    speechSynthesis.cancel();
    if (speechRef.current) {
      speechSynthesis.speak(speechRef.current);
    }
  };

  const progress = duration > 0 ? (currentPosition / text.length) * 100 : 0;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => handleSkip('backward')}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <SkipBack size={16} className="text-gray-600" />
        </button>
        
        <button
          onClick={onTogglePlay}
          className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all text-white shadow-lg"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button
          onClick={() => handleSkip('forward')}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <SkipForward size={16} className="text-gray-600" />
        </button>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Volume2 size={16} className="text-gray-500" />
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-500">
          {isPlaying ? t('playing_story') : t('tap_play')}
        </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
