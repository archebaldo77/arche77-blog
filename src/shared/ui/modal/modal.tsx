// libraries;
import { useCallback, useEffect, useRef, useState, type FC } from 'react';

// shared;
import { Portal } from '@/shared/ui/';

// helpers;
import { useTheme } from '@/app/providers/theme';
import { classNames } from '@/shared/lib';

// styles;
import classes from './modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = (props): JSX.Element => {
  const [theme] = useTheme();
  const { className = ``, children, isOpen = false, onClose } = props;

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isOpen) {
      window.addEventListener(`keydown`, onEscKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener(`keydown`, onEscKeyDown);
    };
  }, [isOpen, onkeydown]);

  const closeHandler = useCallback((): void => {
    if (onClose != null) {
      setIsClosing(true);

      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, 300);
    }
  }, [onClose]);

  const contentClickHandler = (e: React.MouseEvent): void => {
    e.stopPropagation();
  };

  const onEscKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === `Escape`) {
        closeHandler();
      }
    },
    [closeHandler],
  );

  return (
    <Portal>
      <div
        className={classNames(
          classes[`modal`],
          { [classes[`opened`]]: isOpen, [classes[`closing`]]: isClosing },
          [className, theme],
        )}
        onClick={closeHandler}
      >
        <div className={classNames(classes[`overlay`])}>
          <div
            className={classNames(classes[`content`])}
            onClick={contentClickHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
