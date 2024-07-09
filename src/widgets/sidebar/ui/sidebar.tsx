// libraries;
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// widgets;
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LangSwitcher } from '@/widgets/lang-switcher';

// shared;
import {
  AppLink,
  AppLinkTheme,
  Button,
  ButtonTheme,
  ButtonSize,
} from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './sidebar.module.scss';

// icons;
import HomeIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className = `` } = props;

  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  return (
    <div
      className={classNames(
        classes[`sidebar`],
        { [classes[`collapsed`]]: collapsed },
        [className],
      )}
    >
      <div className={classNames(classes[`navigation`])}>
        <AppLink
          to="/"
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={classNames(classes[`navigation-item`])}
        >
          <HomeIcon
            width={30}
            height={30}
            className={classNames(classes[`navigation-icon-home`])}
          />
          <span className={classNames(classes[`navigation-link`])}>
            {t(`Главная страница`)}
          </span>
        </AppLink>
        <AppLink
          to="/about"
          theme={AppLinkTheme.PRIMARY_INVERTED}
          className={classNames(classes[`navigation-item`])}
        >
          <AboutIcon
            width={30}
            height={30}
            className={classNames(classes[`navigation-icon-about`])}
          />
          <span className={classNames(classes[`navigation-link`])}>
            {t(`О нас`)}
          </span>
        </AppLink>
      </div>
      <Button
        className={classNames(classes[`sidebar-toggle`])}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        onClick={() => {
          setCollapsed((prevCollapsed) => !prevCollapsed);
        }}
        square
      >
        {collapsed ? `>` : `<`}
      </Button>
      <div className={classNames(classes[`switchers`])}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>
  );
};
