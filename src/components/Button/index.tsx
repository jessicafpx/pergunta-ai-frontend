import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  isDisabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, isDisabled, ...rest }) => (
  <Container disabled={isDisabled} isDisabled={isDisabled} type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
