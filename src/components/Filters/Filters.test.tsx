import { render, screen } from '@testing-library/react';
import Filters from '@/components/Filters/Filters';
import { AnalyzeTextProvider } from '@/context/AnalyzeTextProvider';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';

describe('Filters Component', () => {
  test('renders Exclude Spaces checkbox', () => {
    render(
      <AnalyzeTextProvider>
        <Filters />
      </AnalyzeTextProvider>
    );
    const excludeSpacesLabelText = screen.getByText('Exclude Spaces');
    expect(excludeSpacesLabelText).toBeInTheDocument();
  });

  test('renders Set Character Limit input', () => {
    render(
      <AnalyzeTextProvider>
        <Filters />
      </AnalyzeTextProvider>
    );
    const setupCharacterLimitText = screen.getByText('Set Character Limit');
    expect(setupCharacterLimitText).toBeInTheDocument();
  });
});
