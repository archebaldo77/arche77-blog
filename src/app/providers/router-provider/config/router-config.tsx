import { MainLazy } from '@/pages/main';
import { AboutLazy } from '@/pages/about';
import { NotFound } from '@/pages/not-found';

import { type RouteProps } from 'react-router-dom';

export enum AppRoute {
  MAIN = `main`,
  ABOUT = `about`,
  NOT_FOUND = `not-found`,
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: `/`,
  [AppRoute.ABOUT]: `/about`,
  [AppRoute.NOT_FOUND]: `*`,
};

export const routerConfig: Record<AppRoute, RouteProps> = {
  [AppRoute.MAIN]: {
    path: routePath.main,
    element: <MainLazy />,
  },

  [AppRoute.ABOUT]: {
    path: routePath.about,
    element: <AboutLazy />,
  },

  [AppRoute.NOT_FOUND]: {
    path: routePath[`not-found`],
    element: <NotFound />,
  },
};
