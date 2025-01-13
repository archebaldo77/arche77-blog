import { useTranslation } from 'react-i18next';

import { AppLink, AppLinkTheme } from '@/shared/ui';
import { routePath } from '@/app/providers/router-provider';

import { classNames } from '@/shared/lib';

import classes from './app-navigation.module.scss';

import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-icon.svg';

interface AppNavigationProps {
  className?: string;
  collapsed: boolean;
}

export const AppNavigation = (props: AppNavigationProps): JSX.Element => {
  const { className = ``, collapsed } = props;
  const { t } = useTranslation();

  return (
    <nav
      className={classNames(
        classes[`app-navigation`],
        { [classes[`collapsed`]]: collapsed },
        [className],
      )}>
      <AppLink
        to={routePath.main}
        theme={AppLinkTheme.INVERTED_PRIMARY}
        className={classNames(classes[`item`])}>
        <HomeIcon
          className={classNames(classes[`icon`])}
          width={32}
          height={32}
        />
        <span className={classNames(classes[`text`])}>
          {t(`Главная страница`)}
        </span>
      </AppLink>
      <AppLink
        to={routePath.about}
        theme={AppLinkTheme.INVERTED_PRIMARY}
        className={classNames(classes[`item`])}>
        <AboutIcon
          className={classNames(classes[`icon`])}
          width={32}
          height={32}
        />
        <span className={classNames(classes[`text`])}>{t(`О нас`)}</span>
      </AppLink>
    </nav>
  );
};
