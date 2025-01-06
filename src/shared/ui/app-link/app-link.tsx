import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from '@/shared/lib';

import { type FC } from 'react';

import classes from './app-link.module.scss';

export enum AppLinkTheme {
  PRIMARY = `primary`,
  INVERTED_PRIMARY = `inverted-primary`,
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props): JSX.Element => {
  const {
    to,
    className = ``,
    theme = AppLinkTheme.PRIMARY,
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
      {...restProps}>
      {children}
    </Link>
  );
};
