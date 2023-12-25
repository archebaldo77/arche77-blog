// packages;
import { useTranslation } from "react-i18next";

// functions;
import { classNames } from "@/shared/lib";

// styles;
import cls from "./not-found.module.scss";

interface NotFoundProps {
  className?: string;
}

export const NotFound = (props: NotFoundProps) => {
  const { t } = useTranslation();

  const { className } = props;

  return (
    <div className={classNames(cls["not-found"], {}, [className])}>
      {t(`Страница не найдена`)}
    </div>
  );
};
