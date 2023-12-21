import { createContext } from "react";

export enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

interface ThemeContextProps {
  theme?: Theme;
  toggleTheme?: () => void;
}

export const LOCAL_STORAGE_THEME_KEY = `theme`;

export const ThemeContext = createContext<ThemeContextProps>({});
