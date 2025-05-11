import { LetterDensity } from '@/context/AnalyzeTextContext';
import { motion } from 'motion/react';

type LetterProps = {
  data: LetterDensity;
};

const Letter = ({ data }: LetterProps) => {
  return (
    <div className="flex w-full items-center gap-[14px]">
      <div className="w-full max-w-3">
        <motion.span layout className="text-Regular-16">
          {data.letter.toUpperCase()}
        </motion.span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-xl bg-counter-neutral-500">
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: data.percentage }}
          className="h-3 bg-counter-purple-400"
        >
          {' '}
        </motion.div>
      </div>
      <div className="flex w-full max-w-20 justify-end">
        <span className="text-Regular-16">{`${data.count} (${data.percentage})`}</span>
      </div>
    </div>
  );
};

export default Letter;
