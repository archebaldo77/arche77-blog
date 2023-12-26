// styles;
import cls from './button.module.scss';

// functions;
import { classNames } from '@/shared/lib';

// types;
import { type ButtonHTMLAttributes } from 'react';

export enum ButtonTheme {
  CLEAR = `clear`,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...restProps
  } = props;

  return (
    <button
      className={classNames(cls.button, {}, [className ?? ``, cls[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};
