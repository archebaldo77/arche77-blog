// functions;
import { classNames } from "@/shared/lib";

// components;
import { AppLink, AppLinkTheme } from "@/shared/ui";

// styles;
import cls from "./header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.header, {}, [className])}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
        Main page
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        About page
      </AppLink>
    </div>
  );
};
