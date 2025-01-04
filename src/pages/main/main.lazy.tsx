import { lazy } from 'react';

export const MainLazy: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import(`./main`),
);
