// libs;
import { Link } from 'react-router-dom';

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
      <Link to={`/`}>Main page</Link>
      <Link to={`/about`}>About page</Link>
      <button
        className={classNames(classes[`toggle-theme`])}
        onClick={toggleTheme}
      >
        Toggle theme
      </button>
    </header>
  );
};
