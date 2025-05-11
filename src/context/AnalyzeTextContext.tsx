import { createContext } from 'react';

export type LetterDensity = {
  letter: string;
  count: number;
  percentage: string;
};

type AnalyzeTextContextType = {
  text: string;
  setText: (text: string) => void;
  excludeSpaces: boolean;
  setExcludeSpaces: (excludeSpaces: boolean) => void;
  characterLimit: boolean;
  setCharacterLimit: (characterLimit: boolean) => void;
  characterLimitValue: number;
  setCharacterLimitValue: (characterLimitValue: number) => void;
  totalWords: number;
  totalCharacters: number;
  sentenceCount: number;
  readingTime: string;
  letterDensity: LetterDensity[];
  error: string;
};

export const AnalyzeTextContext = createContext<
  AnalyzeTextContextType | undefined
>(undefined);
