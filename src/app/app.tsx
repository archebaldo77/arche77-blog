// libraries;
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// pages;
import { MainLazy } from '../pages/main';
import { AboutLazy } from '../pages/about';

// helpers;
import { useTheme } from './providers/theme';
import { classNames } from '../shared/lib';

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
