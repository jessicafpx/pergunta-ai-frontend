import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 0;
    padding: 120px 80px;
    background-color: #fff;

    #illustration {
      border: 1px pink solid;
    }
  }
`;


