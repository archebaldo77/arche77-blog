// libraries;
import { useTranslation } from 'react-i18next';

// widgets;
import { ThemeSwitcher } from '@/widgets/theme-switcher';

// shared;
import { AppLink, AppLinkTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;

  const { t } = useTranslation();

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <div className={classNames(classes[`navigation`])}>
        <AppLink to='/' theme={AppLinkTheme.PRIMARY_INVERTED}>
          {t(`Главная страница`)}
        </AppLink>
        <AppLink to='/about' theme={AppLinkTheme.PRIMARY_INVERTED}>
          {t(`О нас`)}
        </AppLink>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
