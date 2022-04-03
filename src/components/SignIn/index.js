import React, { useState } from 'react';

import { Wrapper, DetailsWrapper, TitleWrapper, Title, InputWrapper, InputTitle, InputForm, SignInButton} from './styled';

const SignIn = ({ setUserAddress }) => {
  const [address, setAddress] = useState('');

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handleSubmit = () => {
    localStorage.setItem('userAddress', address);
    setUserAddress(address);
  }

  return (
    <Wrapper>
      <DetailsWrapper>
        <TitleWrapper>
          <Title>Welcome! Sign In With Your Jobcoin Address</Title>
        </TitleWrapper>
        <InputWrapper>
          <div>
            <div>Joincoin Address</div>
            <InputForm onChange={(event) => handleAddressChange(event.target.value)} />
          </div>
          <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
        </InputWrapper>
      </DetailsWrapper>
    </Wrapper>
  )
};

export default SignIn;