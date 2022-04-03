import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

import SignIn from './components/SignIn';
import Jobcoin from './components/Jobcoin';

const App = () => {
  //save userAddress so that we keep them signed in
  const [userAddress, setUserAddress] = useState(localStorage.getItem('userAddress'));

  const navigate = useNavigate();

  useEffect(() => {
    if (userAddress) {
      navigate('/jobcoin');
    }
  }, [userAddress]);

  return (
    <Routes>
      <Route path='/' element={<SignIn setUserAddress={setUserAddress} />} />
      <Route path='/jobcoin' element={<Jobcoin userAddress={userAddress} />} />
    </Routes>
  )
}

export default App;
