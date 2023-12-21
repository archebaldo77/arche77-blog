// packages;
import { useContext } from "react";

// functions;
import { Theme, ThemeContext, LOCAL_STORAGE_THEME_KEY } from "./theme-context";

type UseThemeResult = [Theme, () => void];

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return [theme, toggleTheme];
};
