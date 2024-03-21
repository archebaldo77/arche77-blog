// helpers;
import { classNames } from '@/shared/lib';

// types;
import type { ButtonHTMLAttributes, FC } from 'react';

// styles;
import classes from './button.module.scss';

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
    theme = ButtonTheme.CLEAR,
    children,
    ...restProps
  } = props;

  return (
    <button
      data-testid="button"
      className={classNames(classes[`button`], {}, [className, classes[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
