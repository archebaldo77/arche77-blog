// libs;
import { lazy } from 'react';

export const MainPageLazy = lazy(async () => await import(`./main`));
