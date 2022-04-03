import React, { useState } from 'react';

import { Wrapper } from './styled';

const Send = ({ userAddress, refetchData }) => {
  const [destinationAddress, setDestinationAddress] = useState('');
  const [amountToSend, setAmountToSend] = useState('');

  const handleChange = (value, type) => {
    if (type === 'destination') {
      setDestinationAddress(value);
    } else {
      setAmountToSend(value);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('fromAddress', userAddress);
    formData.append('toAddress', destinationAddress);
    formData.append('amount', amountToSend);

    const requestOptions = {
      method: 'POST',
      body: formData
    };
    //not accounting for error handling here
    await fetch(`http://jobcoin.gemini.com/deferral-dodge/api/transactions`, requestOptions);
    refetchData(true);
  }

  return (
    <Wrapper>
      <div>Send Jobcoin</div>
      <div>
        <div>Destination Address</div>
        <input onChange={(event) => (handleChange(event.target.value, 'destination'))}/>
      </div>
      <div>
        <div>Amount to Send</div>
        <input onChange={(event) => (handleChange(event.target.value, 'amount'))}/>
      </div>
      <button onClick={handleSubmit}>Send Jobcoins</button>
    </Wrapper>
  )
}

export default Send;