// libraries;
import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// pages;
import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

// helpers;
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../../theme/theme-context';

// styles;
import classes from './app.module.scss';

export const App = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const updatedTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, updatedTheme);
    setTheme!(updatedTheme);
  };

  return (
    <div className={`${classes[`app`]} ${theme}`}>
      <div className={classes[`navigation`]}>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
      </div>
      <button className={classes[`toggle`]} onClick={toggleTheme}>
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
