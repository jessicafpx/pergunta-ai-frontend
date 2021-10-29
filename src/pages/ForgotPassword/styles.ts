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

  p {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-bottom: 52px;
  }

  form {
    width: 100%;
  }

  .login {
    color: #fff;
    display: block;
    margin-top: 54px;
    text-decoration: none;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#fff')};
    }
  }
`;
