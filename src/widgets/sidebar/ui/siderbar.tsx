// packages;
import { useState } from 'react';

// functions;
import { classNames } from '@/shared/lib';

// components;
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LangSwitcher } from '@/widgets/lang-switcher';

// styles;
import cls from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  const { className } = props;

  const onToggle = (): void => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className ?? ``,
      ])}
    >
      <button onClick={onToggle}>Toggle</button>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
