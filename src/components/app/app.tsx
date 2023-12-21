// packages;
import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { MainLazy } from "../../pages/main/main.lazy";
import { AboutLazy } from "../../pages/about/about.lazy";

// styles;
import cls from "./app.module.scss";

export const App = () => {
  return (
    <div className={cls.app}>
      <h1>React App</h1>
      <div className={cls.links}>
        <Link to="/">Main page</Link>
        <Link to="/about">About page</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainLazy />} />
          <Route path="/about" element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
