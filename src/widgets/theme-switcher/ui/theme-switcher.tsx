// providers;
import { Theme, useTheme } from '@/app/providers/theme-provider';

// shared;
import { Button, ButtonTheme } from '@/shared/ui/';

// helpers;
import { classNames } from '@/shared/lib';

// icons;
import Sun from '@/shared/assets/icons/icon-sun.svg';
import Moon from '@/shared/assets/icons/icon-moon.svg';

// styles;
import classes from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps): JSX.Element => {
  const [theme, toggleTheme] = useTheme();
  const { className = `` } = props;

  return (
    <Button
      className={classNames(classes[`theme-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <Moon
          width={50}
          height={50}
        />
      ) : (
        <Sun
          width={50}
          height={50}
        />
      )}
    </Button>
  );
};
