export interface Prophet {
  id: string;
  name: string;
  arabicName: string;
  order: number;
  story: {
    title: string;
    content: string[];
    setting: string;
    mainLesson: string;
    reflectionQuestion: string;
    dua: {
      arabic: string;
      english: string;
      transliteration: string;
    };
  };
  color: string;
  icon: string;
}

export interface StorySection {
  paragraph: string;
  emotion?: string;
}

export type Language = 'en' | 'ar' | 'sv' | 'de';

export interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}
