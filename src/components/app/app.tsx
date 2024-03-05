// libs
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// pages;
import { MainPageLazy } from '../../pages/main/main.lazy';
import { AboutPageLazy } from '../../pages/about/about.lazy';

// hooks;
import { useTheme } from '../../themes/use-theme';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const [theme, toggleTheme] = useTheme();

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
