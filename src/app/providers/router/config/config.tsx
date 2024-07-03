// pages;
import { MainLazy } from '@/pages/main';
import { AboutLazy } from '@/pages/about';

// types;
import { type RouteProps } from 'react-router-dom';

enum AppRoutes {
  MAIN = `MAIN`,
  ABOUT = `ABOUT`,
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: `/`,
  [AppRoutes.ABOUT]: `/about`,
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.MAIN,
    element: <MainLazy />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.ABOUT,
    element: <AboutLazy />,
  },
};
