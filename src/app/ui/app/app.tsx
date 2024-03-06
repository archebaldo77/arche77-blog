// libs
import { Link } from 'react-router-dom';

// providers;
import { AppRouter } from '@/app/providers/router-provider';
import { useTheme } from '@/app/providers/theme-provider';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(classes.app, {}, [theme])}>
      <header className={classNames(classes.header)}>
        <Link to={`/`}>Main page</Link>
        <Link to={`/about`}>About page</Link>
        <button
          className={classNames(classes[`toggle-theme`])}
          onClick={toggleTheme}
        >
          Toggle theme
        </button>
      </header>
      <AppRouter />
    </div>
  );
};
