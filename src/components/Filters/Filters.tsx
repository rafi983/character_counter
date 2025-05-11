import { useAnalyzeText } from '@/hooks/useAnalyzeText';
import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { AnimatePresence, motion } from 'motion/react';
import { animationVariant } from '@/lib/animation';

const Filters = () => {
  const [localCharacterLimitValue, setLocalCharacterLimitValue] = useState(0);
  const [debouncedCharacterLimitValue] = useDebounce(
    localCharacterLimitValue,
    800
  );
  const {
    setExcludeSpaces,
    setCharacterLimit,
    characterLimit,
    setCharacterLimitValue,
    readingTime
  } = useAnalyzeText();

  useEffect(() => {
    setCharacterLimitValue(debouncedCharacterLimitValue);
  }, [debouncedCharacterLimitValue, setCharacterLimitValue]);

  useEffect(() => {
    if (!characterLimit) {
      setLocalCharacterLimitValue(0);
    }
  }, [characterLimit, setLocalCharacterLimitValue]);

  const handleCharacterLimitValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numericValue = Number(value);
    if (!isNaN(numericValue)) {
      setLocalCharacterLimitValue(numericValue);
    } else {
      setLocalCharacterLimitValue(0);
    }
  };

  return (
    <div className="mt-4 flex min-h-16 flex-col items-start justify-between gap-3 overflow-hidden md:min-h-10 md:flex-row md:items-center md:gap-0 lg:min-h-10 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-6 lg:flex-row lg:items-center lg:gap-6">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            className="size-4 cursor-pointer rounded-lg accent-counter-purple-300"
            name="excludespaces"
            onChange={(e) => setExcludeSpaces(e.target.checked)}
          />
          <label htmlFor="excludespaces" className="text-Regular-16">
            Exclude Spaces
          </label>
        </div>
        <div className="flex min-h-8 items-center gap-3 md:min-h-0 lg:min-h-0">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              className="size-4 cursor-pointer rounded-md accent-counter-purple-300"
              name="excludespaces"
              onChange={(e) => setCharacterLimit(e.target.checked)}
            />
            <label htmlFor="excludespaces" className="text-Regular-16">
              Set Character Limit
            </label>
          </div>
          <AnimatePresence mode="popLayout" initial={false}>
            {characterLimit && (
              <motion.div
                {...animationVariant(0.5)}
                className="overflow-hidden"
                key="input"
              >
                <input
                  type="text"
                  className="w-14 rounded-md border border-counter-neutral-900 bg-counter-neutral-400 px-3 py-1 text-Regular-16 text-counter-neutral-900 focus:outline-none dark:bg-counter-neutral-600 dark:text-white"
                  name="characterlimit"
                  value={localCharacterLimitValue}
                  onChange={handleCharacterLimitValue}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div>
        <p className="text-Regular-16">Approx. reading time: {readingTime}</p>
      </div>
    </div>
  );
};

export default Filters;
