import { AnalyzeTextProvider } from '@/context/AnalyzeTextProvider';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import StatCard from './StatCard';

describe('Stats card component', () => {
  test('should render  the total characters', () => {
    render(
      <AnalyzeTextProvider>
        <StatCard
          count={239}
          className="bg-counter-purple-400"
          footerTitle="Total Characters"
          bgPattern="bg-pattern-character"
        />
      </AnalyzeTextProvider>
    );

    const totalCharactersText = screen.getByText('Total Characters');
    expect(totalCharactersText).toBeInTheDocument();
  });

  test('should render the word count', () => {
    render(
      <AnalyzeTextProvider>
        <StatCard
          count={5}
          className="bg-counter-yellow-500"
          footerTitle="Word Count"
          bgPattern="bg-pattern-word-count"
        />
      </AnalyzeTextProvider>
    );

    const totalWordCountText = screen.getByText('Word Count');
    expect(totalWordCountText).toBeInTheDocument();
  });

  test('should render the sentence count', () => {
    render(
      <AnalyzeTextProvider>
        <StatCard
          count={5}
          className="bg-counter-orange-500"
          footerTitle="Sentence Count"
          bgPattern="bg-pattern-sentence-count"
        />
      </AnalyzeTextProvider>
    );

    const totalSentenceCountText = screen.getByText('Sentence Count');
    expect(totalSentenceCountText).toBeInTheDocument();
  });
});
