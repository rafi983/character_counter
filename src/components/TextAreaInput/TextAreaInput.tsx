import { useAnalyzeText } from '@/hooks/useAnalyzeText';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

const TextAreaInput = () => {
  const { error, setText } = useAnalyzeText();
  const teatAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    setText(inputText);
  };

  useEffect(() => {
    if (teatAreaRef.current && error) {
      teatAreaRef.current.focus();
    }
  }, [error]);

  return (
    <textarea
      ref={teatAreaRef}
      onChange={handleChange}
      placeholder="Start typing here...(or paste your text)"
      className={cn(
        'h-52 w-full cursor-pointer resize-none rounded-lg border-2 bg-counter-neutral-400 p-5 text-Regular-20 text-counter-neutral-700 placeholder:text-counter-neutral-700 dark:border-counter-neutral-600 dark:bg-counter-neutral-800 dark:text-white dark:placeholder:text-white',
        error
          ? 'focus:outline-counter-orange-500'
          : 'focus:outline-counter-purple-300'
      )}
    />
  );
};

export default TextAreaInput;
