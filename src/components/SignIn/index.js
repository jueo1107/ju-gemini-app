import React, { useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";

import { AppContext } from '../../context/AppContext';

import { Wrapper, DetailsWrapper, TitleWrapper, Title, InputWrapper, InputForm, SignInButton} from './styled';

const SignIn = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState('');
  const { setUserAddress } = useContext(AppContext);

  const handleAddressChange = (value) => {
    setAddress(value);
  };

  const handleSubmit = () => {
    setUserAddress(address);
    navigate('/jobcoin');
  }

  return (
    <Wrapper>
      <DetailsWrapper>
        <TitleWrapper>
          <Title>Welcome! Sign In With Your Jobcoin Address</Title>
        </TitleWrapper>
        <InputWrapper>
          <div>
            <div>Jobcoin Address</div>
            <InputForm onChange={(event) => handleAddressChange(event.target.value)} />
          </div>
          <SignInButton onClick={handleSubmit}>Sign In</SignInButton>
        </InputWrapper>
      </DetailsWrapper>
    </Wrapper>
  )
};

export default SignIn;