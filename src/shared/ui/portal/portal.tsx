// libraries;
import { createPortal } from 'react-dom';

// types;
import { type FC } from 'react';

interface PortalProps {
  element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props): JSX.Element => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
