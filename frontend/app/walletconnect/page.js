"use client";
import React, { useEffect } from 'react'
import ConnectWalletButton from '../components/ConnectWalletButton'
import './styles.css'
import { useUserContext } from '../../context'
import { ethers } from "ethers";
import { useRouter } from 'next/navigation'

export default function walletConnect() {

  const { correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount, connectWallet } = useUserContext();
  const router = useRouter();

  useEffect(() => {
      console.log('IS USER LOGGED IN', isUserLoggedIn)
    if (isUserLoggedIn) {
      console.log('hitting truthy')
      router.push('/electionsDashboard')
    }
  },[isUserLoggedIn]) 

  return (
    <div className='walletConnectPage'>
      <ConnectWalletButton connectWallet={connectWallet} />
    </div>
  )
}
