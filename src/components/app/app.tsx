// libraries;
import { Link, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

// pages;
import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

// styles;
import classes from './app.module.scss';

export const App = () => {
  return (
    <div className={classes[`app`]}>
      <div className={classes[`navigation`]}>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
      </div>
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
