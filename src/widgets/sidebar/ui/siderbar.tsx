// packages;
import { useState } from "react";

// functions;
import { classNames } from "@/shared/lib";

// components;
import { ThemeSwitcher } from "@/widgets/theme-switcher";

// styles;
import cls from "./sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const { className } = props;

  const onToggle = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <ThemeSwitcher />
    </div>
  );
};
