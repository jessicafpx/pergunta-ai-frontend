import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.main`
  background-color: #012C50;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #fff;
    font-size: 24px;
    margin: 50px 0 22px;
  }

  form {
    width: 100%;
  }
`;
