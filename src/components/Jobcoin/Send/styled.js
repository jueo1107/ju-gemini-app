import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  height: 350px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  display: flex;
  justify-content:center;
  padding: 30px 0;
  border-bottom: 1px solid black;
  font-size: 20px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Input = styled.input`
  height: 30px;
  width: 200px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const AmountInput = styled.div`
  padding: 20px 0;
`;

export const SendButton = styled.button`
  height: 30px;
  width: 210px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const InputTitle = styled.div`
  font-size: 15px;
  padding-bottom: 10px;
`;