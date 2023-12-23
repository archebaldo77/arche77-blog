// functions;
import { useTheme } from "@/app/providers/theme-provider";
import { classNames } from "@/shared/lib";
import { Theme } from "@/app/providers/theme-provider";

// components;
import { Button, ButtonTheme } from "@/shared/ui";

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
      {theme === Theme.LIGHT ? `to Dark` : `to Light`}
    </Button>
  );
};
