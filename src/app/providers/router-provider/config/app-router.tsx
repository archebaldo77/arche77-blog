// libs;
import { type RouteProps } from 'react-router-dom';

// pages;
import { MainPage } from '@/pages/main';
import { AboutPage } from '@/pages/about/';
import { NotFoundPage } from '@/pages/not-found';

enum AppRoutes {
  MAIN = `main`,
  ABOUT = `about`,
  NOT_FOUND = `not_found`,
}

const routePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: `/`,
  [AppRoutes.ABOUT]: `/about`,
  [AppRoutes.NOT_FOUND]: `*`,
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

  [AppRoutes.NOT_FOUND]: {
    path: routePath.not_found,
    element: <NotFoundPage />,
  },
};
