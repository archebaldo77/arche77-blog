// libs;
import { useState } from 'react';

// helpers;
import { classNames } from '@/shared/lib';

// widgets;
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { LangSwitcher } from '@/widgets/lang-switcher';

// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// styles;
import classes from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className = `` } = props;

  return (
    <div
      className={classNames(
        classes[`sidebar`],
        { [classes[`collapsed`]]: collapsed },
        [className],
      )}
    >
      <Button
        onClick={() => {
          setCollapsed((prev) => !prev);
        }}
        theme={ButtonTheme.CLEAR}
      >
        {collapsed ? `>` : `<`}
      </Button>
      <div className={classNames(classes[`switchers`])}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
