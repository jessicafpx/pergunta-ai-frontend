import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

export const Paper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
  max-width: 680px;
  padding: 50px 60px 40px;
  background-color: #F8F8F8;
  border-radius: 10px;

  h3 {
    color: #012C50;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  .avatars {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 20px;
    margin-bottom: 20px;
    img {
      width: 114px;
    }
  }

  .selected {
    border: 3px #FDB643 solid;
    border-radius: 50%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 25px;
  top: 25px;
  background: transparent;
  border: 0;
  cursor: pointer;
`;
