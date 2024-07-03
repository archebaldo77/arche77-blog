// libraries;
import { useContext } from 'react';

// helpers;
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from './theme-context';

type UseThemeResult = [Theme, () => void];

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const updatedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme);
    setTheme!(updatedTheme);
  };

  return [theme as Theme, toggleTheme as () => void];
};
