// libraries;
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// helpers;
import { RouteConfig } from '../config/config';

export const AppRouter = () => {
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
