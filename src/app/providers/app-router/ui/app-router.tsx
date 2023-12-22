// packages;
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// config
import { RouteConfig } from "@/shared/config/router/router";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(RouteConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  );
};
