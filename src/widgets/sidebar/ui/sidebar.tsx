import { useState } from 'react';

import { LanguageSwitcher } from '@/widgets/language-switcher';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './sidebar.module.scss';
import { AppNavigation } from '@/widgets/app-navigation';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className = `` } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        classes[`sidebar`],
        { [classes[`collapsed`]]: collapsed },
        [className],
      )}
      data-testid='sidebar'>
      <AppNavigation collapsed={collapsed} />
      <Button
        onClick={onToggleSidebar}
        theme={ButtonTheme.INVERTED_PRIMARY}
        className={classNames(classes[`btn-toggle`])}
        data-testid='sidebar-button'
        size={ButtonSize.L}
        square>
        {collapsed ? `>` : `<`}
      </Button>
      <div className={classNames(classes[`switchers`])}>
        <ThemeSwitcher />
        <LanguageSwitcher short={collapsed} />
      </div>
    </div>
  );
};
