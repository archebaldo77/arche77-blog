// functions;
import { classNames } from "@/shared/lib";

// styles;
import cls from "./about.module.scss";

interface AboutProps {
  className?: string;
}

const About = (props: AboutProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.about, {}, [className])}>About page</div>
  );
};

export default About;
