import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { Portal } from '@/shared/ui/portal/portal';

import { classNames } from '@/shared/lib';

import classes from './modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  theme?: ModalTheme;
  isOpen: boolean;
  onClose: () => void;
}

export enum ModalTheme {
  PRIMARY = `primary`,
  INVERTED_PRIMARY = `inverted-primary`,
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps): JSX.Element => {
  const {
    className = ``,
    children,
    theme = ModalTheme.PRIMARY,
    isOpen,
    onClose,
  } = props;
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const closeHandler = useCallback(() => {
    setIsClosing(true);

    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, ANIMATION_DELAY);
  }, [onClose]);

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onEscKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isOpen && e.key === `Escape`) {
        closeHandler();
      }
    },
    [isOpen, closeHandler],
  );

  useEffect(() => {
    window.addEventListener(`keydown`, onEscKeyDown);

    return () => {
      window.removeEventListener(`keydown`, onEscKeyDown);
      clearTimeout(timerRef.current);
    };
  }, [isOpen, onEscKeyDown]);

  return (
    <Portal>
      <div
        className={classNames(classes[`modal`], {
          [classes[`opened`]]: isOpen,
          [classes[`closing`]]: isClosing,
        })}>
        <div className={classNames(classes[`overlay`])} onClick={closeHandler}>
          <div
            className={classNames(classes[`content`], {}, [
              className,
              classes[theme],
            ])}
            onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
