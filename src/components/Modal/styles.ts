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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .title {
    width: 100%;
  }

  h2 {
    font-size: 22px;
    font-weight: 700;
    margin-top: 24px;
  }

  h3 {
    color: #012C50;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 25px;
  }

  h4 {
    color: #012C50;
    font-size: 16px;
    font-weight: 700;
    max-width: 244px;
    text-align: center;
  }

  h5 {
    color: #737380;
    font-size: 16px;
    font-weight: 400;
    margin: 12px 0 32px;
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

  .tags-checkbox {
    display: flex;
    gap: 36px;
  }

  .col1, .col2, .col3 {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 16px;
      flex-wrap: nowrap;
      flex: 1;
      display: flex;
      align-items: center;
    }

    input {
      margin-right: 10px;
    }
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
        padding: 5px 7px 8px;
        text-overflow: ellipsis;
        background-color: transparent;
        border: 0;
        color: #012C50;
        font-size: 16px;
        font-weight: 400;

        &::placeholder {
          color: #8B98B1;
        }
      }
    }
`;
