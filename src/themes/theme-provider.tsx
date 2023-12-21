// packages;
import { useMemo, useState } from "react";

// functions;
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from "./theme-context";

// types;
import { type PropsWithChildren, FC } from "react";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
