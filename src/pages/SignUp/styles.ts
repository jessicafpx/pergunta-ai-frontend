import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
export const BackgroundWrapper = styled.aside`
    display: flex;
    margin: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    img {
      max-width: 100%;
    }

`;
export const FormWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #012c50;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
