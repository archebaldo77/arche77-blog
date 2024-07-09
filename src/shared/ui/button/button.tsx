// helpers;
import { classNames } from '@/shared/lib';

// styles;
import classes from './button.module.scss';

// types;
import type { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  CLEAR = `clear`,
  CLEAR_INVERTED = `clear-inverted`,
  BACKGROUND = `background`,
  BACKGROUND_INVERTED = `background-inverted`,
}

export enum ButtonSize {
  M = `m`,
  L = `l`,
  XL = `xl`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  square?: boolean;
}

export const Button: FC<ButtonProps> = (props): JSX.Element => {
  const {
    className = ``,
    children,
    theme = ButtonTheme.CLEAR,
    size = ButtonSize.M,
    square = false,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(
        classes[`button`],
        { [classes[`square`]]: square },
        [className, classes[theme], classes[size]],
      )}
      {...otherProps}
      data-testid="button"
    >
      {children}
    </button>
  );
};
