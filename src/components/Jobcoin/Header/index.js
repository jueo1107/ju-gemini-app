import React from 'react';
import { useNavigate } from "react-router-dom";

import { Wrapper, Profile } from './styled';

const Header = ({ userAddress }) => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userAddress');
    navigate('/');
  };

  return (
    <Wrapper>
      <div>Jobcoin Sender</div>
      <Profile>
        <div>{userAddress}</div>
        <button onClick={handleSignOut}>Sign Out</button>
      </Profile>
    </Wrapper>
  )
};

export default Header;