// libraries;
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// pages;
import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

// helpers;
import { useTheme } from '../../theme/use-theme';

// styles;
import classes from './app.module.scss';

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`${classes[`app`]} ${theme}`}>
      <div className={classes[`navigation`]}>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
      </div>
      <button className={classes[`toggle`]} onClick={toggleTheme!}>
        Изменить тему
      </button>
      <div className={classes[`page`]}>
        <Suspense fallback='Loading...'>
          <Routes>
            <Route path='/' element={<MainLazy />} />
            <Route path='/about' element={<AboutLazy />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
