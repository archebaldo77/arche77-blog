// widgets;
import { ThemeSwitcher } from '@/widgets/theme-switcher';

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
  const { className = `` } = props;

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <div className={classNames(classes[`links`])}>
        <AppLink to={`/`}>Main page</AppLink>
        <AppLink to={`/about`}>About page</AppLink>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
