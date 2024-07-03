// libraries;
import { Link } from 'react-router-dom';

// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './app-link.module.scss';

// types;
import { type FC } from 'react';
import { type LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = `primary`,
  PRIMARY_INVERTED = `primary-inverted`,
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props): JSX.Element => {
  const {
    className = ``,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(classes[`app-link`], {}, [
        className,
        classes[theme],
      ])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
