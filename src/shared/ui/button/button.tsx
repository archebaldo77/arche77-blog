// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './button.module.scss';

// types;
import type { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  CLEAR = `clear`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {
    className = ``,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(classes[`button`], {}, [className, classes[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
