import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  cursor: pointer;
`;

export const BoxInput = styled.span`
  display: flex;
`;

interface BoxControlProps {
  isChecked: boolean
}

export const BoxControl = styled.span<BoxControlProps>`
  position: relative;
  display: inline-flex;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid ${({ isChecked }) => isChecked ? '#00EB84' : '#BEB1C9'};
  padding: 2px;
  margin-top: 4px;

  svg {
    position: absolute;
    top: -7px;
    left: 1px;
  }
`;
