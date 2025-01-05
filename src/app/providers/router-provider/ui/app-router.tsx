import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routerConfig } from '../config/router-config';

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={`Loading...`}>
      <Routes>
        {Object.values(routerConfig).map(({ element, path }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </Suspense>
  );
};
