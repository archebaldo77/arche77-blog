// libraries;
import { Link } from 'react-router-dom';

// providers;
import { AppRouter } from '@/app/providers/router';

// helpers;
import { useTheme } from './providers/theme';
import { classNames } from '@/shared/lib';

// styles;
import classes from './app.module.scss';

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(classes[`app`], {}, [theme])}>
      <div className={classNames(classes[`navigation`])}>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
      </div>
      <button className={classNames(classes[`toggle`])} onClick={toggleTheme!}>
        Изменить тему
      </button>
      <div className={classNames(classes[`page`])}>
        <AppRouter />
      </div>
    </div>
  );
};
