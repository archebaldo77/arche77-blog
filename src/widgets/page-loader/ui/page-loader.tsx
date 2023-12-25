// functions;
import { classNames } from "@/shared/lib";

// styles;
import cls from "./page-loader.module.scss";

// components;
import { Spinner } from "@/shared/ui";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls[`page-loader`], {}, [className])}>
      <Spinner className={cls[`spinner-page-loader`]} />
    </div>
  );
};
