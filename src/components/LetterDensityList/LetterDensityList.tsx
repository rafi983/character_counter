import { LetterDensity } from '@/context/AnalyzeTextContext';
import { useAnalyzeText } from '@/hooks/useAnalyzeText';
import { LucideChevronDown, LucideChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import Letter from '../Letter/Letter';

const LetterDensityList = () => {
  const { letterDensity, text } = useAnalyzeText();
  const [IsSeeMoreVisible, setIsSeeMoreVisible] = useState(true);
  const [slicedIndex, setSlicedIndex] = useState(5);

  useEffect(() => {
    if (text.length === 0) {
      setSlicedIndex(5);
    }
  }, [text]);

  if (letterDensity.length === 0) {
    return (
      <p className="mt-5 text-Regular-16 text-counter-neutral-600 dark:text-white">
        No characters found. Start typing to see letter density.
      </p>
    );
  }

  return (
    <div className="mt-5 flex flex-col items-start justify-start gap-3">
      {letterDensity.slice(0, slicedIndex).map((data: LetterDensity) => (
        <Letter data={data} key={data.letter} />
      ))}
      <button
        className="flex w-full items-center justify-start gap-2 text-Regular-20 text-counter-neutral-900 dark:text-white"
        onClick={() => {
          setIsSeeMoreVisible((prevState) => !prevState);
          if (IsSeeMoreVisible) {
            setSlicedIndex(letterDensity.length);
          } else {
            setSlicedIndex(5);
          }
        }}
      >
        {IsSeeMoreVisible ? 'See more' : 'See less'}
        {IsSeeMoreVisible ? <LucideChevronDown /> : <LucideChevronUp />}
      </button>
    </div>
  );
};

export default LetterDensityList;
