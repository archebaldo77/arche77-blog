import { useContext } from 'react';

import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from './theme-context';

type UseThemeResult = [theme: Theme, toggleTheme: () => void];

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme!(newTheme);
  };

  return [theme!, toggleTheme];
};
