import { AnalyzeTextProvider } from '@/context/AnalyzeTextProvider';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import TextAreaInput from './TextAreaInput';

describe('TextAreaInput Component', () => {
  test('renders textarea with placeholder', () => {
    render(
      <AnalyzeTextProvider>
        <TextAreaInput />
      </AnalyzeTextProvider>
    );
    const textAreaWithPlaceholder = screen.getByPlaceholderText(
      'Start typing here...(or paste your text)'
    );
    expect(textAreaWithPlaceholder).toBeInTheDocument();
  });

  test('handle input change', () => {
    render(
      <AnalyzeTextProvider>
        <TextAreaInput />
      </AnalyzeTextProvider>
    );

    const textArea = screen.getByPlaceholderText(
      'Start typing here...(or paste your text)'
    );
    fireEvent.change(textArea, { target: { value: 'Hello, World!' } });
    expect(textArea).toHaveValue('Hello, World!');
  });
});
