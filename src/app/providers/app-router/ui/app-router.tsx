// packages;
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// functions;
import { classNames } from "@/shared/lib";

// config
import { RouteConfig } from "@/shared/config";

// components;
import { PageLoader } from "@/widgets/page-loader";

// styles;
import cls from "./app-router.module.scss";

export const AppRouter = () => {
  return (
    <div className={classNames(cls.page)}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(RouteConfig).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};
