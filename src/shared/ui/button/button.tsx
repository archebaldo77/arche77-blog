import { classNames } from '@/shared/lib';

import classes from './button.module.scss';

import { type FC, type ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = `clear`,
  PRIMARY = `primary`,
  INVERTED_PRIMARY = `inverted-primary`,
  OUTLINE_PRIMARY = `outline-primary`,
  INVERTED_OUTLINE_PRIMARY = `inverted-outline-primary`,
}

export enum ButtonSize {
  M = `size-m`,
  L = `size-l`,
  XL = `size-xl`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {
    type = `button`,
    theme = ButtonTheme.CLEAR,
    className = ``,
    children,
    square = false,
    size = ButtonSize.M,
    ...restProps
  } = props;

  return (
    <button
      type={type}
      className={classNames(
        classes[`button`],
        { [classes[`square`]]: square },
        [className, classes[theme], classes[size]],
      )}
      {...restProps}>
      {children}
    </button>
  );
};
