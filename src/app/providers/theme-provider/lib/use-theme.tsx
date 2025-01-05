import { useContext } from 'react';
import {
  LOCAL_STORAGE_APP_THEME_KEY,
  Theme,
  ThemeContext,
} from './theme-context';

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_APP_THEME_KEY, newTheme);
    document.body.className = newTheme;
    setTheme!(newTheme);
  };

  return { theme: theme as Theme, toggleTheme };
};
