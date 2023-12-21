// packages;
import { Routes, Route, Link } from "react-router-dom";

// pages;
import { Main } from "../../pages/main/main";
import { About } from "../../pages/about/about";

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
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
