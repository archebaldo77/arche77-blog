// libraries;
import { useState } from 'react';

// shared;
import { Button, ButtonTheme } from '@/shared/ui';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps): JSX.Element => {
  const { className = `` } = props;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={classNames(
        classes[`sidebar`],
        { [classes[`collapsed`]]: collapsed },
        [className]
      )}
    >
      <Button
        className={classNames(classes[`button`])}
        theme={ButtonTheme.PRIMARY_INVERTED}
        onClick={() => setCollapsed((prevCollapsed) => !prevCollapsed)}
      >
        {collapsed ? `>` : `<`}
      </Button>
    </div>
  );
};
