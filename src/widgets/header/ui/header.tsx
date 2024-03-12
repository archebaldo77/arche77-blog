// libs;
import { useTranslation } from 'react-i18next';

// shared;
import { AppLink } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { t } = useTranslation();
  const { className = `` } = props;

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <div className={classNames(classes[`links`])}>
        <AppLink to={`/`}>{t(`Главная страница`)}</AppLink>
        <AppLink to={`/about`}>{t(`О нас`)}</AppLink>
      </div>
    </header>
  );
};
