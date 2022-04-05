import React, { useState, createContext } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [userAddress, setUserAddress] = useState('');

  return (
    <AppContext.Provider 
      value={{
        userAddress,
        setUserAddress
      }}
    >
      {children}
    </AppContext.Provider>
  )
};