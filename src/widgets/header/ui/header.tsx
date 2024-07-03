// shared;
import { AppLink, AppLinkTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';
import { useTheme } from '@/app/providers/theme';

// styles;
import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;

  const [, toggleTheme] = useTheme();

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <div className={classNames(classes[`navigation`])}>
        <AppLink to='/' theme={AppLinkTheme.PRIMARY_INVERTED}>
          Главная
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.PRIMARY_INVERTED}>
          О нас
        </AppLink>
      </div>
      <button className={classNames(classes[`toggle`])} onClick={toggleTheme!}>
        Изменить тему
      </button>
    </header>
  );
};
