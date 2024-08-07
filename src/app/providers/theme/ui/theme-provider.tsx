// libraries;
import { useState, useMemo, type FC } from 'react';

// helpers;
import {
  Theme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from '../lib/theme-context';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider: FC = (props) => {
  const { children } = props;

  const [theme, setTheme] = useState<Theme>(defaultTheme);
  document.body.className = theme;

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
