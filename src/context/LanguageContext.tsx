import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Language, Translations } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Translations = {
  'prophet_stories': {
    en: 'Prophet Stories',
    ar: 'قصص الأنبياء',
    sv: 'Profetberättelser', 
    de: 'Prophetengeschichten'
  },
  'learn_messengers': {
    en: 'Learn about Allah\'s messengers through beautiful stories',
    ar: 'تعرف على رسل الله من خلال القصص الجميلة',
    sv: 'Lär dig om Allahs budbärare genom vackra berättelser',
    de: 'Lerne Allahs Gesandte durch schöne Geschichten kennen'
  },
  'good_morning': {
    en: 'Good Morning!',
    ar: 'صباح الخير!',
    sv: 'God morgon!',
    de: 'Guten Morgen!'
  },
  'good_afternoon': {
    en: 'Good Afternoon!',
    ar: 'مساء الخير!',
    sv: 'God eftermiddag!',
    de: 'Guten Tag!'
  },
  'good_evening': {
    en: 'Good Evening!',
    ar: 'مساء الخير!',
    sv: 'God kväll!',
    de: 'Guten Abend!'
  },
  'assalamu_alaikum': {
    en: 'Assalamu Alaikum!',
    ar: 'السلام عليكم!',
    sv: 'Assalamu Alaikum!',
    de: 'Assalamu Alaikum!'
  },
  'today': {
    en: 'Today',
    ar: 'اليوم',
    sv: 'Idag',
    de: 'Heute'
  },
  'all_stories': {
    en: 'All Stories',
    ar: 'جميع القصص',
    sv: 'Alla berättelser',
    de: 'Alle Geschichten'
  },
  'favorites': {
    en: 'Favorites',
    ar: 'المفضلة',
    sv: 'Favoriter',
    de: 'Favoriten'
  },
  'completed': {
    en: 'Completed',
    ar: 'مكتملة',
    sv: 'Avslutade',
    de: 'Abgeschlossen'
  },
  'todays_story': {
    en: 'Today\'s Story',
    ar: 'قصة اليوم',
    sv: 'Dagens berättelse',
    de: 'Heutige Geschichte'
  },
  'previous': {
    en: 'Previous',
    ar: 'السابق',
    sv: 'Föregående',
    de: 'Vorherige'
  },
  'next': {
    en: 'Next',
    ar: 'التالي',
    sv: 'Nästa',
    de: 'Nächste'
  },
  'story': {
    en: 'Story',
    ar: 'القصة',
    sv: 'Berättelse',
    de: 'Geschichte'
  },
  'of': {
    en: 'of',
    ar: 'من',
    sv: 'av',
    de: 'von'
  },
  'lesson_story': {
    en: 'Lesson of the Story',
    ar: 'درس القصة',
    sv: 'Berättelsens lärdom',
    de: 'Lehre der Geschichte'
  },
  'think_about': {
    en: 'Think About This',
    ar: 'فكر في هذا',
    sv: 'Tänk på detta',
    de: 'Denk darüber nach'
  },
  'special_prayer': {
    en: 'Special Prayer (Dua)',
    ar: 'دعاء خاص',
    sv: 'Speciell bön (Dua)',
    de: 'Besonderes Gebet (Dua)'
  },
  'no_favorites': {
    en: 'No Favorites Yet',
    ar: 'لا توجد مفضلة بعد',
    sv: 'Inga favoriter än',
    de: 'Noch keine Favoriten'
  },
  'tap_heart': {
    en: 'Tap the heart on a story to save it here.',
    ar: 'انقر على القلب في القصة لحفظها هنا.',
    sv: 'Tryck på hjärtat på en berättelse för att spara den här.',
    de: 'Tippe auf das Herz einer Geschichte, um sie hier zu speichern.'
  },
  'start_journey': {
    en: 'Start Your Journey!',
    ar: 'ابدأ رحلتك!',
    sv: 'Börja din resa!',
    de: 'Beginne deine Reise!'
  },
  'completed_appear': {
    en: 'Completed stories will appear here.',
    ar: 'ستظهر القصص المكتملة هنا.',
    sv: 'Avslutade berättelser visas här.',
    de: 'Abgeschlossene Geschichten erscheinen hier.'
  },
  'playing_story': {
    en: 'Playing narration...',
    ar: 'تشغيل السرد...',
    sv: 'Spelar upp berättarröst...',
    de: 'Erzählung wird abgespielt...'
  },
  'listen_story': {
    en: 'Listen to the story',
    ar: 'استمع للقصة',
    sv: 'Lyssna på berättelsen',
    de: 'Hör dir die Geschichte an'
  },
  'narrated_in': {
    en: 'Narrated in',
    ar: 'مروية بـ',
    sv: 'Berättad på',
    de: 'Erzählt auf'
  },
  'en': { en: 'English', ar: 'الإنجليزية', sv: 'Engelska', de: 'Englisch' },
  'ar': { en: 'Arabic', ar: 'العربية', sv: 'Arabiska', de: 'Arabisch' },
  'sv': { en: 'Swedish', ar: 'السويدية', sv: 'Svenska', de: 'Schwedisch' },
  'de': { en: 'German', ar: 'الألمانية', sv: 'Tyska', de: 'Deutsch' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useLocalStorage<Language>('app-language', 'en');

  const t = (key: string): string => {
    return translations[key]?.[language] || translations[key]?.['en'] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
