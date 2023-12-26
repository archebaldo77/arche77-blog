// packages;
import { useTranslation } from 'react-i18next';

// functions;
import { classNames } from '@/shared/lib';

// components;
import { AppLink, AppLinkTheme } from '@/shared/ui';

// styles;
import cls from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls.header, {}, [className ?? ``])}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
        {t(`Главная страница`)}
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        {t(`О нас`)}
      </AppLink>
    </div>
  );
};
