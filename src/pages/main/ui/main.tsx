// functions;
import cls from "./main.module.scss";

// styles;
import { classNames } from "@/shared/lib";

interface MainProps {
  className?: string;
}

const Main = (props: MainProps) => {
  const { className } = props;

  return <div className={classNames(cls.main, {}, [className])}>Main Page</div>;
};

export default Main;
