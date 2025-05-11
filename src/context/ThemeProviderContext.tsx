import { createContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const intialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null
};

export const ThemeProviderContext =
  createContext<ThemeProviderState>(intialState);
