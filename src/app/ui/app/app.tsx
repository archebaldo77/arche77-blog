// libs
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// pages;
import { MainPage } from '../../../pages/main';
import { AboutPage } from '../../../pages/about';

// hooks;
import { useTheme } from '../../providers/theme-provider/lib/use-theme';

// helpers;
import { classNames } from '../../../shared/lib';

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
      <Suspense fallback='Loading...'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
