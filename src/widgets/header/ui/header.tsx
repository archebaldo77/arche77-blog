import { useTheme } from '@/app/providers/theme-provider';
import { routePath } from '@/app/providers/router-provider';

import { AppLink, AppLinkTheme } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;
  const { toggleTheme } = useTheme();

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <nav className={classNames(classes[`app-navigation`])}>
        <AppLink to={routePath.main} theme={AppLinkTheme.INVERTED_PRIMARY}>
          Главная страница
        </AppLink>
        <AppLink to={routePath.about} theme={AppLinkTheme.INVERTED_PRIMARY}>
          О нас
        </AppLink>
      </nav>
      <button onClick={toggleTheme}>Изменить тему</button>
    </header>
  );
};
