// libs;
import { type RouteProps } from 'react-router-dom';

// pages;
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about/';

enum AppRoutes {
  MAIN = `main`,
  ABOUT = `about`,
}

const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: `/`,
  [AppRoutes.ABOUT]: `/about`,
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: routePath.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: routePath.about,
    element: <AboutPage />,
  },
};
