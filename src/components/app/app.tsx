import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

import { classNames } from '../../helpers/class-names/class-names';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  return (
    <div className={classNames(classes[`app`])}>
      <header className={classNames(classes[`header`])}>
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
