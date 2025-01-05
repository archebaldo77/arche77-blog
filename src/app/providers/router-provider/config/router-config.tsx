import { type RouteProps } from 'react-router-dom';

import { MainLazy } from '@/pages/main';
import { AboutLazy } from '@/pages/about';

export enum AppRoute {
  MAIN = `main`,
  ABOUT = `about`,
}

export const routePath: Record<AppRoute, string> = {
  [AppRoute.MAIN]: `/`,
  [AppRoute.ABOUT]: `/about`,
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
};
