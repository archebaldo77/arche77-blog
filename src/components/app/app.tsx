// libs
import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// pages;
import { MainPageLazy } from '../../pages/main/main.lazy';
import { AboutPageLazy } from '../../pages/about/about.lazy';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div>
      <header className={classes.header}>
        <Link to={`/`}>Main page</Link>
        <Link to={`/about`}>About page</Link>
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
