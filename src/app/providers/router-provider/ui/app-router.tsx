// libs;
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// config;
import { routesConfig } from '../config/app-router';

export const AppRouter = () => {
  return (
    <Suspense fallback='Loading...'>
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
