// packages;
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
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
      <button onClick={onToggle}>{collapsed ? t(`>`) : t(`<`)}</button>
      <ThemeSwitcher />
      <LangSwitcher />
    </div>
  );
};
