import React from 'react';
import { Overlay, OverlayInner } from './styled/layout';

const Modal = ({ onClose, children }) => (
  <Overlay onClick={onClose}>
    <OverlayInner>
      {children}
    </OverlayInner>
  </Overlay>
);

export default Modal;
