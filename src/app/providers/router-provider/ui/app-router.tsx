import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoader } from '@/widgets/page-loader';

import { routerConfig } from '../config/router-config';

import { classNames } from '@/shared/lib';

import classes from './app-router.module.scss';

export const AppRouter = (): JSX.Element => {
  return (
    <div className={classNames(classes[`page-content`])}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routerConfig).map(({ element, path }) => {
            return <Route key={path} path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
