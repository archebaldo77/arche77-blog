import { classNames } from '@/shared/lib';

import classes from './button.module.scss';

import { type FC, type ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = `clear`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {
    type = `button`,
    theme = ButtonTheme.CLEAR,
    className = ``,
    children,
    ...restProps
  } = props;

  return (
    <button
      type={type}
      className={classNames(classes[`button`], {}, [className, classes[theme]])}
      {...restProps}>
      {children}
    </button>
  );
};
