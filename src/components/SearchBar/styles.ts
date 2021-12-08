import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  gap: 25px;

  select {
    background: #D8DDE9;
    border-radius: 10px;
    width: 270px;
    border: 0;
    padding: 0 25px;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ECEEF2;
  border-radius: 10px;
  padding: 0 15px;
  width: 500px;
  height: 100%;
  border: 2px solid #ECEEF2;
  color: #012C50;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #737380;
    &::placeholder {
      color: #737380;
    }
  }

  svg {
    margin-right: 15px;
  }
`;

export const DropMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  background: #ECEEF2;
  border-radius: 8px;
  padding: 0 25px;
  width: 270px;
  height: 100%;
  border: 2px solid #ECEEF2;
  color: #012C50;

  position: relative;

  input {
    cursor: pointer;
    font-size: 14px;
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: #737380;
    }
  }

  div {
    position: absolute;
    top: 45px;
    left: 0;
    padding: 15px 0;
    background: #ECEEF2;
    border-radius: 8px;
    width: 270px;
    z-index: 10;

    option {
      cursor: pointer;
      padding: 0 25px;
      &:hover {
        color: #00BEBB;
      }
    }
  }
`;
