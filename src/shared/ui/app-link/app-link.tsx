// libs;
import { Link, type LinkProps } from 'react-router-dom';

// helpers;
import { classNames } from '@/shared/lib';

// types;
import { type FC } from 'react';

// styles;
import classes from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = `primary`,
  SECONDARY = `secondary`,
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props): JSX.Element => {
  const {
    className = ``,
    theme = AppLinkTheme.SECONDARY,
    to,
    children,
    ...restProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes[`app-link`], {}, [
        className,
        classes[theme],
      ])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
