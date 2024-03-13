// libs;
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// widgets;
import { PageLoader } from '@/widgets/page-loader';

// config;
import { routesConfig } from '../config/app-router';

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
