// packages;
import { useTranslation } from "react-i18next";

// functions;
import cls from "./main.module.scss";

// styles;
import { classNames } from "@/shared/lib";

interface MainProps {
  className?: string;
}

const Main = (props: MainProps) => {
  const { t } = useTranslation(`main`);

  const { className } = props;

  return (
    <div className={classNames(cls.main, {}, [className])}>
      {t(`Главная страница`)}
    </div>
  );
};

export default Main;
