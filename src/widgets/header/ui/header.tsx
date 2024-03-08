// shared;
import { AppLink } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
  toggleTheme: () => void;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = ``, toggleTheme } = props;

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <AppLink to={`/`}>Main page</AppLink>
      <AppLink to={`/about`}>About page</AppLink>
      <button
        className={classNames(classes[`toggle-theme`])}
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </header>
  );
};
