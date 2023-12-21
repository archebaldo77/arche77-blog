// packages;
import { useState } from "react";

// functions;
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "./theme-context";

// types;
import { type PropsWithChildren, FC } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const currentTheme = prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, currentTheme);

      return currentTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
