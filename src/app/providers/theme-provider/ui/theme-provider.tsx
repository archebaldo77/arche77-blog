// libs;
import { type FC, useState, useMemo } from 'react';

// helpers;
import {
  ThemeContext,
  Theme,
  LOCAL_STORAGE_THEME_KEY,
} from '../lib/theme-context';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC = (props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const { children } = props;

  const defaultValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};
