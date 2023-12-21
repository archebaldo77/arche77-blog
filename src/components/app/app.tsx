// packages;
import { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { MainLazy } from "../../pages/main/main.lazy";
import { AboutLazy } from "../../pages/about/about.lazy";

// functions;
import { ThemeContext } from "../../themes/theme-context";

// styles;
import cls from "./app.module.scss";

export const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${cls.app} ${theme}`}>
      <h1>React App</h1>
      <div className={cls.links}>
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
