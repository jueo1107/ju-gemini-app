import React from 'react';

import { Wrapper, Title, JobcoinBalance } from './styled';

const Balance = ({currentBalance}) => {
  return (
    <Wrapper>
      <Title>Jobcoin Balance</Title>
      <JobcoinBalance>{currentBalance}</JobcoinBalance>
    </Wrapper>
  )
};

export default Balance;