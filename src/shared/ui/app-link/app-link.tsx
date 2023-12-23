// packages;
import { Link, type LinkProps } from "react-router-dom";

// functions;
import { classNames } from "@/shared/lib";

// styles;
import cls from "./app-link.module.scss";

export enum AppLinkTheme {
  PRIMARY = `primary`,
  SECONDARY = `secondary`,
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink = (props: AppLinkProps) => {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;

  return (
    <Link
      to={to}
      {...restProps}
      className={classNames(cls[`app-link`], {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};
