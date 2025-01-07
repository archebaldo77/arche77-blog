import { useTranslation } from 'react-i18next';

import { routePath } from '@/app/providers/router-provider';

import { AppLink, AppLinkTheme } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;
  const { t } = useTranslation();

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <nav className={classNames(classes[`app-navigation`])}>
        <AppLink to={routePath.main} theme={AppLinkTheme.INVERTED_PRIMARY}>
          {t(`Главная страница`)}
        </AppLink>
        <AppLink to={routePath.about} theme={AppLinkTheme.INVERTED_PRIMARY}>
          {t(`О нас`)}
        </AppLink>
      </nav>
    </header>
  );
};
