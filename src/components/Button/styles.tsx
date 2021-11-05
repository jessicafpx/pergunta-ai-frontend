import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  isDisabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
  ${({isDisabled}) => css`
    background: ;
    background: ${isDisabled ? '#7CDBDA' : '#00BEBB'};
    cursor: ${isDisabled && 'not-allowed'};
    height: 56px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color:  ${isDisabled ? '#3F8395' : '#012C50'};
    width: 100%;
    font-weight: 500;
    margin-top: 25px;
    transition: background-color 0.2s;
    &:hover {
      background: ${!isDisabled && shade(0.1, '#00BEBB')};
    }
  `}

`;
