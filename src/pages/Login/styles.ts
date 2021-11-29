import styled from 'styled-components';
import { shade } from 'polished';

export const Wrapper = styled.div`
  background-color: #012C50;
  display: flex;


  aside {
    height: 100vh;
    display: flex;
    align-items: stretch;

    width: 100%;
    max-width: 700px;

    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    padding: 120px 80px;
    background-color: #fff;
  }

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
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

      a {
        color: #fff;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.2s;
        &:hover {
          color: ${shade(0.2, '#fff')};
        }
      }

      .signup {
        color: #FDB237;
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
          color: ${shade(0.2, '#FDB237')};
        }
      }
    }
  }
`;


