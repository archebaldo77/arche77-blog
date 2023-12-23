// packages;
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// functions;
import { classNames } from "@/shared/lib";

// config
import { RouteConfig } from "@/shared/config/router/router";

// styles;
import cls from "./app-router.module.scss";

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames(cls.page)}>
        <Routes>
          {Object.values(RouteConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Suspense>
  );
};
