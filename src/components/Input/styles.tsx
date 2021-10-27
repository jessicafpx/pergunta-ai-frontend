import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #D8DDE9;
  border-radius: 10px;
  padding: 14px;
  width: 100%;
  border: 2px solid #D8DDE9;
  color: #012C50;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 10px;
  }
  ${props =>
    props.isFocused &&
    css`
      color: #FDB237;
      border-color: #FDB237;
    `}
  ${props =>
    props.isFilled &&
    css`
      /* color: #FDB237; */
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #8B8DAB;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
