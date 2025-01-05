import { useEffect, useMemo, useState, type FC } from 'react';
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_APP_THEME_KEY,
} from '../lib/theme-context';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_APP_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    document.body.className = defaultTheme;
  }, []);

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
