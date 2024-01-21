"use client";
import React, { useEffect } from 'react'
import { useUserContext } from '../../context';
import primaryElectionAbi from '../../../backend/build/contracts/PrimaryContract.json'
import { PrimaryContractAddress } from "../../config"
import { ethers } from "ethers";
import './styles.css'

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
    <div className='dashboard'>
      <h1>Elections Dashboard</h1>
      <div className="previous-elections">
        Previous Elections
        <div>
          <div>
            <p>2020 General Election</p>
          </div>
          <div>
            <p>2020 Primary Election</p>
          </div>
        </div>
      </div>
      {votes.length ?
        (<p className='already-voted'>
          You have already voted for the current election
        </p>) :
        (<div className="current-elections">
        <a href='/testElections'>Vote for current election</a>
      </div>)}
      {/* <div className="future-elections">
        Currently These Elections are not open for voting
      </div> */}
      <p className='previous-votes'>Previous votes</p>
      <div className='votes'>
        {votes.map((vote) => {
          vote = Object.values(vote)
          return (
            <div className='vote'>
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
