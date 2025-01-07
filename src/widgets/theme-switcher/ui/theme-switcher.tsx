import { Theme, useTheme } from '@/app/providers/theme-provider';

import { Button, ButtonTheme } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './theme-switcher.module.scss';

import SunIcon from '@/shared/assets/icons/sun-icon.svg';
import MoonIcon from '@/shared/assets/icons/moon-icon.svg';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps): JSX.Element => {
  const { className = `` } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames(classes[`theme-switcher`], {}, [className])}>
      <Button onClick={toggleTheme} theme={ButtonTheme.CLEAR}>
        {theme === Theme.LIGHT ? (
          <SunIcon width={50} height={50} />
        ) : (
          <MoonIcon width={50} height={50} />
        )}
      </Button>
    </div>
  );
};
