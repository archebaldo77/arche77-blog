import { classNames } from '@/shared/lib';

import classes from './sidebar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui';
import { useState } from 'react';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className = `` } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(
        classes[`sidebar`],
        { [classes[`collapsed`]]: collapsed },
        [className],
      )}>
      <Button
        onClick={onToggle}
        theme={ButtonTheme.INVERTED_PRIMARY}
        className={classNames(classes[`btn-toggle`])}>
        {collapsed ? `>` : `<`}
      </Button>
    </div>
  );
};
