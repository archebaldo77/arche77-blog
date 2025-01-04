import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <Link to={`/`}>Главная страница</Link>
        <Link to={`/about`}>О нас</Link>
      </header>
      <br />
      <Suspense fallback={`Loading...`}>
        <Routes>
          <Route index element={<MainLazy />} />
          <Route path='/about' element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
