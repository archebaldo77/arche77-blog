import { lazy } from 'react';

export const AboutLazy: React.LazyExoticComponent<() => JSX.Element> = lazy(
  () => import(`./about`),
);
