// packages;
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { MainLazy } from "@/pages/main";
import { AboutLazy } from "@/pages/about";

// functions;
import { useTheme } from "@/app/providers";
import { classNames } from "@/shared";

// styles;
import cls from "./index.module.scss";

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
