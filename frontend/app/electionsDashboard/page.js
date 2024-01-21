"use client";
import React, { useEffect } from 'react'
import { useUserContext } from '../../context';
import primaryElectionAbi from '../../../backend/build/contracts/PrimaryContract.json'
import { PrimaryContractAddress } from "../../config"
import { ethers } from "ethers";

export default function electionsDashboard() {
  const { votes, setVotes } = useUserContext();

  useEffect(() => {
    getMyVotes()
  }, []);

  const getMyVotes = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(PrimaryContractAddress, primaryElectionAbi.abi, signer);
        const votes = await contract.getMyVotes();
        setVotes(votes)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <h1>Elections Dashboard</h1>
      <div className="previous-elections">
        No Previous Elections
      </div>
      {votes.length ? 
        (<>
          You have already voted for the current election
        </>) :
        (<div className="current-elections">
        <a href='/testElections'>Vote for current elections</a>
      </div>)}
      <div className="future-elections">
        Currently These Elections are not open for voting
      </div>
      <div className='votes'>
        {votes.map((vote) => {
          vote = Object.values(vote)
          return (
            <div>
              <h1>Vote for current election</h1>
              <p>State Candidate: {vote[6]}</p>
              <p>Upper State Legislative Candidate: {vote[7]}</p>
              <p>Lower State Legislative Candidate: {vote[8]}</p>
              <p>Congressional Candidate: {vote[9]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
