// libraries;
import { Suspense, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

// pages;
import { MainLazy } from '../../pages/main/main.lazy';
import { AboutLazy } from '../../pages/about/about.lazy';

// styles;
import classes from './app.module.scss';

enum Theme {
  LIGHT = `light`,
  DARK = `dark`,
}

export const App = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    );
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
