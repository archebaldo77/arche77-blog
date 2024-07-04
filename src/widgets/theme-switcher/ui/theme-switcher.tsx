// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';
import { useTheme, Theme } from '@/app/providers/theme';

// styles;
import classes from './theme-switcher.module.scss';

// icons;
import Sun from '@/shared/assets/icons/sun.svg';
import Moon from '@/shared/assets/icons/moon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps): JSX.Element => {
  const { className = `` } = props;

  const [theme, toggleTheme] = useTheme();

  return (
    <Button
      className={classNames(classes[`theme-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? (
        <Moon
          width={40}
          height={40}
        />
      ) : (
        <Sun
          width={40}
          height={40}
        />
      )}
    </Button>
  );
};
