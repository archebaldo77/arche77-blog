import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { useTheme } from '@/app/providers/theme-provider';

import { MainLazy } from '@/pages/main';
import { AboutLazy } from '@/pages/about';

import { classNames } from '@/shared/lib';

import classes from './app.module.scss';

export const App = (): JSX.Element => {
  const { toggleTheme } = useTheme();

  return (
    <div className={classNames(classes[`app`])}>
      <header className={classNames(classes[`header`])}>
        <Link to={`/`}>Главная страница</Link>
        <Link to={`/about`}>О нас</Link>
        <button onClick={toggleTheme}>Изменить тему</button>
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
