import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FEFEFE;
  border:1px solid #FEFEFE;
  border-radius: 10px;
  padding: 24px;
  margin-top: 10px;

  &:hover {
    border:1px solid #00BEBB;
  }

  > p {
    margin-bottom: 24px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  img {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }

  svg {
    height: 24px;
    width: 24px;

    margin-right: 16px;
    margin-left: 8px;
  }

  .user-container {
    p {
      font-size: 14px;
      color: #737380;
    }
  }

  .interaction-container {
    color: #737380;
  }

`;
