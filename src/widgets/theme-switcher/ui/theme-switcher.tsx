// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';
import { useTheme, Theme } from '@/app/providers/theme';

// styles;
import classes from './theme-switcher.module.scss';

// icons;
import SunIcon from '@/shared/assets/icons/sun.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';

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
        <SunIcon
          width={40}
          height={40}
        />
      ) : (
        <MoonIcon
          width={40}
          height={40}
        />
      )}
    </Button>
  );
};
