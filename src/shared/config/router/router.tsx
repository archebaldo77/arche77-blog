// pages;
import { AboutLazy } from "@/pages/about";
import { MainLazy } from "@/pages/main";

// types;
import { type RouteProps } from "react-router-dom";

enum AppRoute {
  MAIN = `main`,
  ABOUT = `about`,
}

const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: `/`,
  [AppRoute.ABOUT]: `/about`,
};

export const RouteConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: RoutePath[AppRoute.MAIN],
    element: <MainLazy />,
  },

  [AppRoute.ABOUT]: {
    path: RoutePath[AppRoute.ABOUT],
    element: <AboutLazy />,
  },
};
