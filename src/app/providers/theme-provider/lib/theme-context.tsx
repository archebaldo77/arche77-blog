import { createContext } from 'react';

export enum Theme {
  LIGHT = `app-light-theme`,
  DARK = `app-dark-theme`,
}

interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_APP_THEME_KEY = `app_theme`;

export const ThemeContext = createContext<ThemeContextProps>({});
