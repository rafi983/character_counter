import { AnalyzeTextContext } from '@/context/AnalyzeTextContext';
import { useContext } from 'react';

export function useAnalyzeText() {
  const context = useContext(AnalyzeTextContext);
  if (!context) {
    throw new Error(
      'useAnalyzeText must be used within an AnalyzeTextProvider'
    );
  }
  return context;
}
