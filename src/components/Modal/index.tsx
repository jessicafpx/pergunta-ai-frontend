import React from 'react';

import { FiX } from 'react-icons/fi';
import Button from '../Button';

import { Overlay, Paper, CloseButton } from './styles';

interface Props {
  close: () => void;
  title: string;
  buttonText: string;
}

const Modal: React.FC<Props> = ({ close, title, buttonText, children }) => {
  return (
    <Overlay>
      <Paper>
        <CloseButton onClick={close}>
          <FiX color="#012C50" size="24"/>
        </CloseButton>
        <h3>{title}</h3>
        {children}
        <Button type="submit">{buttonText}</Button>
      </Paper>
    </Overlay>
  );
}

export default Modal;
