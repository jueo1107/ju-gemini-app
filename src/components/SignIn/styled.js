import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
`;

export const Title = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputForm = styled.input`
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SignInButton = styled.button`
  width: 179px;
`;

