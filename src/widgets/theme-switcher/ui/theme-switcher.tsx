// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';
import { useTheme } from '@/app/providers/theme';

// styles;
import classes from './theme-switcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps): JSX.Element => {
  const { className = `` } = props;

  const [, toggleTheme] = useTheme();

  return (
    <Button
      className={classNames(classes[`theme-switcher`], {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
    >
      Изменить тему
    </Button>
  );
};
