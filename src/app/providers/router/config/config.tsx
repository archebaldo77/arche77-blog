// pages;
import { MainLazy } from '@/pages/main';
import { AboutLazy } from '@/pages/about';
import { NotFound } from '@/pages/not-found';

// types;
import { type RouteProps } from 'react-router-dom';

enum AppRoutes {
  MAIN = `MAIN`,
  ABOUT = `ABOUT`,
  NOT_FOUND = `NOT_FOUND`,
}

const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: `/`,
  [AppRoutes.ABOUT]: `/about`,
  [AppRoutes.NOT_FOUND]: `*`,
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

  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.NOT_FOUND,
    element: <NotFound />,
  },
};
