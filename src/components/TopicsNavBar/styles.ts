import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  nav {
    flex: 1;
    border-bottom: 1px solid #737380;
    ul {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      list-style-type: none;
      li {
        padding: 5px 15px;
        width: 19%;
        text-align: center;
        position: relative;
        &:hover{
          color: #1EBBB8;
          font-weight: 700;
          /* border-bottom: 3px solid #1EBBB8; */
          &::after {
            display: block;
            content: '';
            width: 100%;
            height: 3px;
            background: #1EBBB8;
            position: absolute;
            bottom: -1.5px;
            left: 0;
          }
        }

      }
    }
  }

  button {
    margin: 0;
    width: 150px;
    height: 40px;
  }
`;
