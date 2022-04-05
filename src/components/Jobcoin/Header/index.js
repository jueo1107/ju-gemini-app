import React, { useContext } from 'react';

import { AppContext } from '../../../context/AppContext';

import { Wrapper, Title, Profile, Address, SignOutLink } from './styled';

const Header = ({ userAddress }) => {
  const { setUserAddress } = useContext(AppContext);

  const handleSignOut = () => {
    setUserAddress('');
  };

  return (
    <Wrapper>
      <Title>Jobcoin Sender</Title>
      <Profile>
        <Address>{userAddress}</Address>
        <SignOutLink to='/' onClick={handleSignOut}>Sign Out</SignOutLink>
      </Profile>
    </Wrapper>
  )
};

export default Header;