import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #00BEBB;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #012C50;
  width: 100%;
  font-weight: 500;
  margin-top: 25px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.1, '#00BEBB')};
  }
`;
