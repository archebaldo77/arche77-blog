// libs
import { Suspense, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// pages;
import { MainPageLazy } from '../../pages/main/main.lazy';
import { AboutPageLazy } from '../../pages/about/about.lazy';

import classes from './app.module.scss';

enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

export const App = (): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
  };

  return (
    <div className={`${classes.app} ${theme}`}>
      <header className={classes.header}>
        <Link to={`/`}>Main page</Link>
        <Link to={`/about`}>About page</Link>
        <button className={classes[`toggle-theme`]} onClick={toggleTheme}>
          Toggle theme
        </button>
      </header>
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' element={<MainPageLazy />} />
          <Route path='/about' element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
