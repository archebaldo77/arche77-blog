import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ButtonTheme,
  Modal,
  ModalTheme,
  ButtonSize,
} from '@/shared/ui';

import { classNames } from '@/shared/lib';

import classes from './header.module.scss';

interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { className = `` } = props;
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = useCallback(() => {
    setIsAuthModal((isAuthModal) => !isAuthModal);
  }, []);

  return (
    <header className={classNames(classes[`header`], {}, [className])}>
      <Button
        className={classNames(classes[`button-auth`])}
        onClick={onToggle}
        theme={ButtonTheme.CLEAR}
        size={ButtonSize.L}>
        {t(`Войти`)}
      </Button>
      <Modal
        isOpen={isAuthModal}
        onClose={onToggle}
        theme={ModalTheme.INVERTED_PRIMARY}>
        Content must be here!
      </Modal>
    </header>
  );
};
