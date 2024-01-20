"use client";
import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

export const useUserContext = () => React.useContext(UserContext);

// Create the provider component
export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('ayo');
  const [password, setPassword] = useState('');
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentAccount, setCurrentAccount] = useState('');

  return (
    <UserContext.Provider value={{ username, password, setUsername, setPassword, correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount }}>
      {children}
    </UserContext.Provider>
  );
};
