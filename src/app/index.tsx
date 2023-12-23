// functions;
import { useTheme } from "@/app/providers/theme-provider";
import { classNames } from "@/shared/lib";

// styles;
import cls from "./index.module.scss";

// components;
import { Header } from "@/widgets/header";
import { AppRouter } from "@/app/providers/app-router";
import { ThemeSwitcher } from "@/widgets/theme-switcher";

export const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={classNames(cls.app, {}, [theme])}>
      <Header />
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};
