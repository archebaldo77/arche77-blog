// packages;
import { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { MainLazy } from "../../pages/main/main.lazy";
import { AboutLazy } from "../../pages/about/about.lazy";

// styles;
import cls from "./app.module.scss";

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
