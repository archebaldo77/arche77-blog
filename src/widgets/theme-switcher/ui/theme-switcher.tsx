// functions;
import { useTheme, Theme } from "@/app/providers/theme-provider";
import { classNames } from "@/shared/lib";

// components;
import { Button, ButtonTheme } from "@/shared/ui";

// icons;
import { LightThemeIcon, DarkThemeIcon } from "@/shared/assets";

// styles;
import cls from "./theme-switcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const [theme, toggleTheme] = useTheme();

  const { className } = props;

  return (
    <Button
      className={classNames(cls["theme-switcher"], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <DarkThemeIcon width={50} height={50} />
      ) : (
        <LightThemeIcon width={50} height={50} />
      )}
    </Button>
  );
};
