// packages;
import { useTranslation } from "react-i18next";

// functions;
import { classNames } from "@/shared/lib";

// styles;
import cls from "./about.module.scss";

interface AboutProps {
  className?: string;
}

const About = (props: AboutProps) => {
  const { t } = useTranslation(`about`);

  const { className } = props;

  return (
    <div className={classNames(cls.about, {}, [className])}>{t(`О нас`)}</div>
  );
};

export default About;
