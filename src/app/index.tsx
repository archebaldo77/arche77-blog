// packages;
import { Link } from "react-router-dom";

// functions;
import { useTheme } from "@/app/providers/theme-provider";
import { classNames } from "@/shared";

// styles;
import cls from "./index.module.scss";
import { AppRouter } from "@/app/providers/app-router";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <h1>React App</h1>
      <div className={classNames(cls.links)}>
        <Link to="/">Main page</Link>
        <Link to="/about">About page</Link>
      </div>
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
