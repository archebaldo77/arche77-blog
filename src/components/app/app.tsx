// packages;
import { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { MainLazy } from "../../pages/main/main.lazy";
import { AboutLazy } from "../../pages/about/about.lazy";

// functions;
import { useTheme } from "../../themes/use-theme";
import { classNames } from "../../helpers/class-names/class-names";

// styles;
import cls from "./app.module.scss";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <h1>React App</h1>
      <div className={classNames(cls.links)}>
        <Link to="/">Main page</Link>
        <Link to="/about">About page</Link>
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLazy />} />
          <Route path="/about" element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
