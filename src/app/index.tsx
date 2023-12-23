// functions;
import { useTheme } from "@/app/providers/theme-provider";
import { classNames } from "@/shared/lib";

// styles;
import cls from "./index.module.scss";

// components;
import { AppRouter } from "@/app/providers/app-router";
import { Header } from "@/widgets/header";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <Header />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};
