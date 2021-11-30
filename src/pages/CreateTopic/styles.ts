import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 54px 32px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;


  h1 {
    color: #29292E;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 36px;
  }

  input, textarea {
    border: 0;
    border-radius: 8px;
    margin-bottom: 12px;
    padding: 16px;
    width: 100%;
    color: #29292E;

    &::placeholder {
      color: #737380;
    }
  }

  textarea {
    font-size: 16px;
    font-family: 'Poppins';
    min-height: 250px;
    max-width: 800px;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;

    .select-button {
      background-color: transparent;
      border: none;
      color: #00BEBB;
      font-size: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .submit-button {
      max-width: 340px;
      margin: 0;
    }
  }
`;
