import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: #012C50;
  height: 145px;

  svg {
    margin-left: 7vw;
  }
`;

export const Content = styled.main`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  margin: -90px auto 50px;

  figure {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-bottom: 50px;

    img {
      width: 190px;
    }

    button {
      background-color: #02B5B2;
      width: 48px;
      height: 48px;
      border-radius: 50px;
      border: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
      margin-left: -40px;

      &:hover {
        background: ${shade(0.1, '#00BEBB')};
      }
    }
  }
`;

export const Title = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 22px;

    h1 {
      font-size: 20px;
      font-weight: 700;
    }

    button {
      border: 0;
      background-color: transparent;
      margin-left: 10px;
    }
`;

export const Form = styled.form`
  fieldset {
    margin-bottom: 16px;
    border-radius: 10px;
    color: #8B98B1;
    font-size: 12px;
    border: 1px #A2AEC6 solid;
    padding-left: 12px;

    legend {
      padding: 0 5px;
    }

    input {
      width: 100%;
      padding: 5px 7px 8px;
      text-overflow: ellipsis;
      background-color: transparent;
      border: 0;
      color: #012C50;
      font-size: 16px;
      font-weight: 400;
    }
  }
`;
