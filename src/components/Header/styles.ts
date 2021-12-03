import styled from 'styled-components';

export const Container = styled.div`
  background-color: #012C50;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;

  @media (max-width: 768px) {
    padding: 0 100px;
  }

  @media (max-width: 630px) {
    padding: 0 32px;
  }

  .logo {
    width: 132px;
    cursor: pointer;
  }

  .avatar-area {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: 0;

    .avatar-img {
      width: 42px;
      margin-right: 8px;
    }

    h4 {
      color: #fff;
      font-size: 16px;

      @media (max-width: 768px) {
        display: none;
      }
    }

    strong {
      color: #00BEBB;
    }
  }
`;
