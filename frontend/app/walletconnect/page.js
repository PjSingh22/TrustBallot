"use client";
import React from 'react'
import ConnectWalletButton from '../components/ConnectWalletButton'
import './styles.css'
import { useUserContext } from '../components/context'
import { ethers } from "ethers";
import { useRouter } from 'next/navigation'

export default function walletConnect() {

  const { correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount } = useUserContext();
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
    <div className='walletConnectPage'>
      <ConnectWalletButton connectWallet={connectWallet} />
    </div>
  )
}
