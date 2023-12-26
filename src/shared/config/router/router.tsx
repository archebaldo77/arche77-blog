// pages;
import { AboutLazy } from '@/pages/about';
import { MainLazy } from '@/pages/main';
import { NotFound } from '@/pages/not-found';

// types;
import { type RouteProps } from 'react-router-dom';

enum AppRoute {
  MAIN = `main`,
  ABOUT = `about`,
  NOT_FOUND = `*`,
}

const RoutePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: `/`,
  [AppRoute.ABOUT]: `/about`,
  [AppRoute.NOT_FOUND]: `*`,
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

  [AppRoute.NOT_FOUND]: {
    path: RoutePath[AppRoute.NOT_FOUND],
    element: <NotFound />,
  },
};
