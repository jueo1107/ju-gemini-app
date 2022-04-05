import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from './routes/PrivateRoute';
import SignIn from './components/SignIn';
import Jobcoin from './components/Jobcoin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/jobcoin' element={<PrivateRoute Component={Jobcoin}/>} />
        <Route path="/" element={<Navigate replace to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
