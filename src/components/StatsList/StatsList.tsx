import { useAnalyzeText } from '@/hooks/useAnalyzeText';
import StatCard from '../StatCard/StatCard';

const StatsList = () => {
  const { totalCharacters, totalWords, sentenceCount } = useAnalyzeText();
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row lg:flex-row">
      <StatCard
        count={totalCharacters}
        className="bg-counter-purple-400"
        footerTitle="Total Characters"
        bgPattern="bg-pattern-character"
      />
      <StatCard
        count={totalWords}
        className="bg-counter-yellow-500"
        footerTitle="Word Count"
        bgPattern="bg-pattern-word-count"
      />
      <StatCard
        count={sentenceCount}
        className="bg-counter-orange-500"
        footerTitle="Sentence Count"
        bgPattern="bg-pattern-sentence-count"
      />
    </div>
  );
};

export default StatsList;
