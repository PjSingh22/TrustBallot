"use client";
import React, { createContext, useState } from 'react';
import { useRouter } from 'next/navigation'

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
  const [votes, setVotes] = useState([]);
  const router = useRouter();

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      let chainId = await ethereum.request({ method: "eth_chainId" });
      console.log("connected to chainId", chainId);
      setCorrectNetwork(true);

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      console.log("connected to account", accounts[0]);
      setIsUserLoggedIn(true);
      setCurrentAccount(accounts[0]);
      router.push('/testElections')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <UserContext.Provider value={{ username, password, setUsername, setPassword, correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount, votes, setVotes, connectWallet }}>
      {children}
    </UserContext.Provider>
  );
};
