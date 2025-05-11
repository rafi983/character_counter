import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeProvider.tsx';
import { AnalyzeTextProvider } from './context/AnalyzeTextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <AnalyzeTextProvider>
        <App />
      </AnalyzeTextProvider>
    </ThemeProvider>
  </StrictMode>
);
