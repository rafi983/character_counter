import { useState, ReactNode, useEffect, useCallback } from 'react';
import { AnalyzeTextContext, LetterDensity } from './AnalyzeTextContext';

type AnalyzeTextProviderProps = {
  children: ReactNode;
};

export function AnalyzeTextProvider({ children }: AnalyzeTextProviderProps) {
  const [text, setText] = useState('');
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [characterLimit, setCharacterLimit] = useState(false);
  const [characterLimitValue, setCharacterLimitValue] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [readingTime, setReadingTime] = useState('0 min 0 sec');
  const [error, setError] = useState(''); // Error state
  const [letterDensity, setLetterDensity] = useState<LetterDensity[]>([]); // Letter density state

  const processText = useCallback(() => {
    let processedText = text;

    // Exclude spaces if the option is enabled
    if (excludeSpaces) {
      processedText = processedText.replace(/\s+/g, '');
    }

    // Apply character limit *only* for further processing
    if (
      characterLimit &&
      characterLimitValue > 0 &&
      processedText.length > characterLimitValue
    ) {
      processedText = processedText.slice(0, characterLimitValue);
    }

    return processedText;
  }, [text, excludeSpaces, characterLimit, characterLimitValue]);

  const calculateDensity = (textArr: string[]) => {
    const count: { [key: string]: number } = {};
    const totalLetters = textArr.length;

    for (let i = 0; i < textArr.length; i++) {
      const letter = textArr[i].toLowerCase();
      count[letter] = (count[letter] || 0) + 1;
    }

    const density = Object.keys(count).map((letter) => ({
      letter,
      count: count[letter],
      percentage: ((count[letter] / totalLetters) * 100).toFixed(2) + '%'
    }));

    return density;
  };

  const calculateMetrics = useCallback(
    (processedText: string) => {
      // Extract words from the full text (not limited)
      const words = text.match(/\b\w+\b/g) || [];
      setTotalWords(words.length);

      // Count sentences from the full processed text
      const sentences = text.split(/[.!?]/).filter(Boolean);
      setSentenceCount(sentences.length);

      // Calculate reading time based on full word count
      if (words.length > 0) {
        const averageReadingSpeed = 200; // Words per minute
        const readingTimeMinutes = words.length / averageReadingSpeed;
        const minutes = Math.floor(readingTimeMinutes);
        const seconds = Math.round((readingTimeMinutes - minutes) * 60);
        setReadingTime(`${minutes} min ${seconds} sec`);
      } else {
        setReadingTime('0 min 0 sec');
      }
      // Set total characters based on the processed text length
      setTotalCharacters(processedText.length);

      // Calculate letter density
      const splitLetters = processedText
        .replace(/[ .,!@#$%^&*()_+={}[\]:;"'<>,?/|\\`~]/g, '')
        .split('');
      const density = calculateDensity(splitLetters);
      setLetterDensity(density);

      // Set error if totalCharacters exceeds characterLimitValue
      if (
        characterLimit &&
        characterLimitValue > 0 &&
        text.length > characterLimitValue
      ) {
        setError(
          `Limit reached! Your text exceeds ${characterLimitValue} characters.`
        );
      } else {
        setError('');
      }
    },
    [text, characterLimit, characterLimitValue]
  );

  useEffect(() => {
    const processedText = processText();
    calculateMetrics(processedText);
  }, [
    text,
    excludeSpaces,
    characterLimit,
    characterLimitValue,
    processText,
    calculateMetrics
  ]);

  useEffect(() => {
    if (text.trim() === '') {
      setTotalWords(0);
      setTotalCharacters(0);
      setSentenceCount(0);
      setReadingTime('0 min 0 sec');
      setLetterDensity([]);
    }
  }, [text]);

  useEffect(() => {
    if (!characterLimit) {
      setCharacterLimitValue(0);
      setError('');
    }
  }, [characterLimit]);

  const value = {
    text,
    setText,
    excludeSpaces,
    setExcludeSpaces,
    characterLimit,
    setCharacterLimit,
    characterLimitValue,
    setCharacterLimitValue,
    totalWords,
    totalCharacters,
    sentenceCount,
    readingTime,
    letterDensity,
    error
  };

  return (
    <AnalyzeTextContext.Provider value={value}>
      {children}
    </AnalyzeTextContext.Provider>
  );
}
