import React, { useState } from 'react';

import { Wrapper, Title, Inputs, Input, InputTitle, AmountInput, SendButton } from './styled';

const Send = ({ userAddress, refetchData }) => {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');

  const handleChange = (value, type) => {
    const setValue = type === 'destination' ? setDestinationAddress : setAmountToSend;
    setValue(value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('fromAddress', userAddress);
    formData.append('toAddress', destinationAddress);
    formData.append('amount', amountToSend);

    const requestOptions = {
      method: 'POST',
      body: formData
    };

    //not accounting for error handling here for this project
    fetch(`http://jobcoin.gemini.com/deferral-dodge/api/transactions`, requestOptions).then(() => {
      refetchData(true);
      setDestinationAddress('');
      setAmountToSend('');
    });
  }

  return (
    <Wrapper>
      <Title>Send Jobcoins</Title>
      <Inputs>
        <div>
          <InputTitle>Destination Address</InputTitle>
          <Input value={destinationAddress} onChange={(event) => (handleChange(event.target.value, 'destination'))}/>
        </div>
        <AmountInput>
          <InputTitle>Amount to Send</InputTitle>
          <Input  value={amountToSend} onChange={(event) => (handleChange(event.target.value, 'amount'))}/>
        </AmountInput>
        <SendButton onClick={handleSubmit}>Send Jobcoins</SendButton>
      </Inputs>
    </Wrapper>
  )
}

export default Send;