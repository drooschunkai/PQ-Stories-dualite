export type Language = 'en' | 'ar' | 'sv' | 'de';

export interface MultilingualString {
  [key in Language]: string;
}

export interface MultilingualStringArray {
  [key in Language]: string[];
}

export interface Dua {
  arabic: string;
  transliteration: string;
  english: MultilingualString;
}

export interface Story {
  title: MultilingualString;
  content: MultilingualStringArray;
  setting: MultilingualString;
  mainLesson: MultilingualString;
  reflectionQuestion: MultilingualString;
  dua: Dua;
  audioUrl?: Partial<Record<Language, string>>;
}

export interface Prophet {
  id: string;
  name: string;
  arabicName: string;
  order: number;
  story: Story;
  color: string;
  icon: string;
}

export interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}
