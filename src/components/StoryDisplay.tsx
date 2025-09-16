import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, BookOpen, BrainCircuit, BookHeart, MessageSquareQuote } from 'lucide-react';
import { Prophet } from '../types';
import { useAppContext } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import AudioPlayer from './AudioPlayer';

interface StoryDisplayProps {
  prophet: Prophet;
  isToday: boolean;
  isCompact?: boolean;
}

const StoryDisplay: React.FC<StoryDisplayProps> = ({ prophet, isToday, isCompact = false }) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const { isFavorite, isCompleted, toggleFavorite, markCompleted } = useAppContext();
  const { language, t } = useLanguage();

  const getTranslated = <T extends string | string[]>(data: { [lang: string]: T }): T => {
    return data[language] || data['en'];
  };

  const storyTitle = getTranslated(prophet.story.title);
  const storyContent = getTranslated(prophet.story.content);
  const mainLesson = getTranslated(prophet.story.mainLesson);
  const reflectionQuestion = getTranslated(prophet.story.reflectionQuestion);
  const duaEnglish = getTranslated(prophet.story.dua.english);

  const fullStoryText = [
    storyTitle,
    ...storyContent,
    mainLesson,
    reflectionQuestion,
    duaEnglish
  ].join('. ');

  useEffect(() => {
    if (!isCompact) {
      const timer = setTimeout(() => {
        if (!isCompleted(prophet.id)) {
          markCompleted(prophet.id);
        }
      }, 10000); // Mark as read after 10 seconds of viewing
      return () => clearTimeout(timer);
    }
  }, [prophet.id, isCompleted, markCompleted, isCompact]);
  
  // Stop audio when story changes
  useEffect(() => {
    return () => {
      setIsAudioPlaying(false);
    };
  }, [prophet.id]);

  const toggleAudio = () => setIsAudioPlaying(!isAudioPlaying);
  
  const colorClasses = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', tag: 'bg-emerald-500' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', tag: 'bg-blue-500' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', tag: 'bg-amber-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', tag: 'bg-purple-500' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', tag: 'bg-red-500' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', tag: 'bg-green-500' },
    sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', tag: 'bg-sky-500' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', tag: 'bg-indigo-500' },
    yellow: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', tag: 'bg-yellow-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', tag: 'bg-orange-500' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', tag: 'bg-teal-500' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', tag: 'bg-violet-500' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', tag: 'bg-cyan-500' },
    slate: { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', tag: 'bg-slate-500' },
    gold: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-700', tag: 'bg-yellow-500' },
  };
  const colors = colorClasses[prophet.color as keyof typeof colorClasses] || colorClasses.emerald;

  if (isCompact) {
    return (
      <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/50`}>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className={`w-12 h-12 ${colors.tag} rounded-full flex items-center justify-center text-xl text-white font-semibold relative flex-shrink-0`}>
            {prophet.icon}
            {isFavorite(prophet.id) && <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">💖</div>}
            {isCompleted(prophet.id) && !isFavorite(prophet.id) && <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-800 truncate">{prophet.name}</h3>
            <p className="text-gray-600 font-arabic text-sm">{prophet.arabicName}</p>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2 flex-shrink-0 max-w-[40%] text-right rtl:text-left">{storyTitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-yellow-50/30 rounded-3xl p-4 sm:p-6 shadow-lg border border-yellow-100/50 max-w-lg w-full mx-auto`}>
      <div className="relative">
        {isToday && (
          <div className={`absolute top-0 left-0 rtl:left-auto rtl:right-0 -mt-2 ml-2 rtl:ml-0 rtl:mr-2 px-4 py-1.5 rounded-full text-sm font-semibold text-white ${colors.tag} shadow-md`}>
            ⭐ {t('todays_story')}
          </div>
        )}
        <div className="flex justify-end space-x-2 rtl:space-x-reverse pt-10">
          <button
            onClick={() => toggleFavorite(prophet.id)}
            className={`p-2 rounded-full transition-colors ${isFavorite(prophet.id) ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-400 hover:text-red-500'}`}
          >
            <Heart size={20} fill={isFavorite(prophet.id) ? 'currentColor' : 'none'} />
          </button>
          <button className="p-2 rounded-full bg-gray-100 text-gray-400">
            <BookOpen size={20} />
          </button>
        </div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{prophet.name}</h2>
        <p className="text-xl sm:text-2xl font-arabic text-gray-600 mt-1">{prophet.arabicName}</p>
        <p className={`font-semibold mt-2 ${colors.text}`}>{storyTitle}</p>
      </div>

      <div className="mt-6 space-y-4">
        <AudioPlayer isPlaying={isAudioPlaying} onTogglePlay={toggleAudio} text={fullStoryText} />

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-sm border border-white/50">
          <p className="text-gray-700 leading-relaxed">{storyContent.join(' ')}</p>
        </div>

        <div className={`${colors.bg} rounded-2xl p-5 border ${colors.border}`}>
          <h3 className={`font-semibold text-lg flex items-center space-x-2 rtl:space-x-reverse mb-2 ${colors.text}`}>
            <BookHeart size={20}/>
            <span>{t('lesson_story')}</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">{mainLesson}</p>
        </div>

        <div className={`bg-purple-50 rounded-2xl p-5 border border-purple-200`}>
          <h3 className="font-semibold text-lg flex items-center space-x-2 rtl:space-x-reverse mb-2 text-purple-700">
            <BrainCircuit size={20}/>
            <span>{t('think_about')}</span>
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">{reflectionQuestion}</p>
        </div>

        <div className={`bg-green-50 rounded-2xl p-5 border border-green-200`}>
          <h3 className="font-semibold text-lg flex items-center space-x-2 rtl:space-x-reverse mb-2 text-green-700">
            <MessageSquareQuote size={20}/>
            <span>{t('special_prayer')}</span>
          </h3>
          <div className="text-center space-y-2 mt-3">
            <p className="text-lg font-arabic text-gray-800">{prophet.story.dua.arabic}</p>
            <p className="text-xs text-gray-600 italic">{prophet.story.dua.transliteration}</p>
            <p className="text-gray-700 text-sm">{duaEnglish}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDisplay;
