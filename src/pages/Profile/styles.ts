import styled, {css} from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #012C50;
  height: 145px;

  .arrow-left {
    margin-left: 7vw;
  }

  .logout {
    margin-right: 7vw;
    cursor: pointer;
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
      background-color: #FDB643;
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
        background: ${shade(0.1, '#FDB643')};
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

interface InputProps {
  isDisabled?: boolean;
}

export const Form = styled.form`
    fieldset {
      margin-bottom: 16px;
      border-radius: 10px;
      color: #8B98B1;
      font-size: 12px;
      border: 1px #A2AEC6 solid;
      padding-left: 12px;
      padding-right: 12px;

      legend {
        padding: 0 5px;
      }

      input {
        width: 100%;

        &::placeholder {
          color: #8B98B1;
        }
      }
    }

    .input-password {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      input {
        cursor: pointer;
      }
    }
`;

export const Input = styled.input<InputProps>`
  ${({isDisabled}) => css`
    padding: 5px 7px 8px;
    text-overflow: ellipsis;
    background-color: transparent;
    border: 0;
    color: ${isDisabled ? '#8B98B1' : '#012C50'};
    cursor: ${isDisabled && 'not-allowed'};
    font-size: 16px;
    font-weight: 400;
  `}
`
