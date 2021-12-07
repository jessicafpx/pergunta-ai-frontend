import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 54px 0;
  max-width: 800px;
  margin: 0 auto;

  .topic-box {
    display: flex;
    flex-direction: column;
    background-color: #FFF;
    border-radius: 8px;
    width: 100%;
    padding: 30px;
    margin-bottom: 30px;

    h3 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: #29292E;
      margin-bottom: 24px;
    }

    .tags {
      display: flex;
      gap: 8px;
      margin-bottom: 12px;
    }

    .topic-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .buttons-box {
    display: flex;
    align-items: center;
    gap: 16px;

    svg {
      cursor: pointer;
    }
  }

  .user-container {
    display: flex;
    align-items: center;
    color: #737380;
    font-size: 14px;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .answer-box {
    display: flex;
    flex-direction: column;
    width: 100%;

    textarea {
      border: 0;
      border-radius: 8px;
      padding: 16px;
      width: 100%;
      max-width: 800px;
      min-height: 150px;
      color: #29292E;

      font-size: 16px;
      font-family: 'Poppins';

      &::placeholder {
        color: #737380;
      }

      &:focus {
        border: 1px #00BEBB solid;
      }
    }

    button {
      max-width: 50%;
      margin-left: auto;
      margin-top: 16px;
      margin-bottom: 70px;
    }
  }

  .answer-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    h4 {
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .answer-item {
      background-color: #FFF;
      border-radius: 8px;
      padding: 24px;
      margin-bottom: 12px;
    }
  }

  .answer-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;
  }
`;
