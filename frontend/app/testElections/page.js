"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'
import './testElections.css';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
// import generalElectionAbi from '../../../backend/build/contracts/GeneralContract.json'
import primaryElectionAbi from '../../../backend/build/contracts/PrimaryContract.json'
import { PrimaryContractAddress } from "../../config"
import { ethers } from "ethers";
import { useUserContext } from "../../context";

export default function testElections() {
    const {username, correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount, setVotes, votes, connectWallet } = useUserContext();
    const router = useRouter();
    const [USSenate, setUSSenate] = useState('')
    const [USHouse, setUSHouse] = useState('')
    const [congress, setCongress] = useState('')
    const [stateSenate, setStateSenate] = useState('')
    const [stateHouse, setStateHouse] = useState('')

    // console.log(USSenate)
    // console.log(USHouse)
    // console.log(congress)
    // console.log(stateSenate)
    // console.log(stateHouse)

    useEffect(() => {
      connectWallet()
    }, [])

    const addVote = async (e) => {
        e.preventDefault()
        if (USSenate === '' || USHouse === '' || congress === '' || stateSenate === '' || stateHouse === '') {
          alert('Please select a candidate for each position')
          return
        }
        const user = JSON.parse(sessionStorage.getItem('user'))

        const _congressionalCandidateId = Number(congress.split(' ')[0])
        const _lowerStateLegislativeCandidateId = Number(USSenate.split(' ')[0])
        const _stateCandidateId = Number(stateHouse.split(' ')[0])
        const _upperStateLegislativeCandidateId = Number(stateSenate.split(' ')[0])
        const _congressionalCandidate = congress.split(' ')[1] + ' ' + congress.split(' ')[2]
        const _stateCandidate = stateHouse.split(' ')[1] + ' ' + stateHouse.split(' ')[2]
        const _upperStateLegislativeCandidate = stateSenate.split(' ')[1] + ' ' + stateSenate.split(' ')[2]
        const _lowerStateLegislativeCandidate = USSenate.split(' ')[1] + ' ' + USSenate.split(' ')[2]
        const _voterId = Number(user.id)

        const vote = {
          _congressionalCandidateId,
          _lowerStateLegislativeCandidateId,
          _stateCandidateId,
          _upperStateLegislativeCandidateId,
          _congressionalCandidate,
          _stateCandidate,
          _upperStateLegislativeCandidate,
          _lowerStateLegislativeCandidate,
          _voterId
        }


        try {
          const { ethereum } = window;
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(PrimaryContractAddress, primaryElectionAbi.abi, signer);
            console.log("", contract)
            const transaction = contract.addVote(_voterId, _congressionalCandidateId, _stateCandidateId, _upperStateLegislativeCandidateId, _lowerStateLegislativeCandidateId, _congressionalCandidate, _stateCandidate, _upperStateLegislativeCandidate, _lowerStateLegislativeCandidate).then(res => {
              console.log(res)
              setVotes([...votes, vote])
            }).catch(err => {
              console.log(err)
            })
            // await transaction.wait();
            // console.log('Transaction Mined')
            // console.log(transaction)
            console.log('Vote added')
            router.push('/electionsDashboard')
          } else {
            console.log('Ethereum object does not exist')
          }
        } catch (error) {
          console.log("OOF", error)
        }
    }

    const handleTestElectionFormSubmit = (e) => {
      e.preventDefault()
      addVote()
    }
    
    // if (!currentAccount) {
    //   return (
    //     <div>
    //       <h1>You are not logged in</h1>
    //     </div>
    //   )
    // }
    return (
        <div className="testBallot">
            <form onSubmit={addVote}>
                <fieldset>
                    <legend>Select a US Senate:</legend>
                    <div>
                        <input onChange={(e) => {
                            setUSSenate(e.target.value)
                        }} type="radio" id="123 Mike Jones" name="us senate" value="123 Mike Jones" />
                        <label htmlFor="123 Mike Jones">Mike Jones</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setUSSenate(e.target.value)
                        }} type="radio" id="234 Paul White" name="us senate" value="234 Paul White" />
                        <label htmlFor="234 Paul White">Paul White</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setUSSenate(e.target.value)
                        }} type="radio" id="345 Louie Rich" name="us senate" value="345 Louie Rich" />
                        <label htmlFor="345 Louie Rich">Louie Rich</label>
                    </div>
                    <legend>Select a US House:</legend>
                    <div>
                        <input onChange={(e) => {
                            setUSHouse(e.target.value)
                        }} type="radio" id="123 Nancey Jime" name="us house" value="123 Nancey Jime" />
                        <label htmlFor="123 Nancey Jime">Nancey Jime</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setUSHouse(e.target.value)
                        }} type="radio" id="234 Thane Presswell" name="us house" value="234 Thane Presswell" />
                        <label htmlFor="234 Thane Presswell">Thane Presswell</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setUSHouse(e.target.value)
                        }} type="radio" id="345 Vilhelmina Lohmeyer" name="us house" value="345 Vilhelmina Lohmeyer" />
                        <label htmlFor="345 Vilhelmina Lohmeyer">Vilhelmina Lohmeyer</label>
                    </div>
                    <legend>Select a State Senate:</legend>
                    <div>
                        <input onChange={(e) => {
                            setStateSenate(e.target.value)
                        }} type="radio" id="123 Sallyanne Leaman" name="state senate" value="123 Sallyanne Leaman" />
                        <label htmlFor="123 Sallyanne Leaman">Sallyanne Leaman</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setStateSenate(e.target.value)
                        }} type="radio" id="234 Clarke Lotwich" name="state senate" value="234 Clarke Lotwich" />
                        <label htmlFor="234 Clarke Lotwich">Clarke Lotwich</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setStateSenate(e.target.value)
                        }} type="radio" id="345 Nessi Lamball" name="state senate" value="345 Nessi Lamball" />
                        <label htmlFor="345 Nessi Lamball">Nessi Lamball</label>
                    </div>
                    <legend>Select a State House:</legend>
                    <div>
                        <input onChange={(e) => {
                            setStateHouse(e.target.value)
                        }} type="radio" id="123 Evyn Ostick" name="state house" value="123 Evyn Ostick" />
                        <label htmlFor="123 Evyn Ostick">Evyn Ostick</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setStateHouse(e.target.value)
                        }} type="radio" id="234 Pen Ionnidis" name="state house" value="234 Pen Ionnidis" />
                        <label htmlFor="234 Pen Ionnidis">Pen Ionnidis</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setStateHouse(e.target.value)
                        }} type="radio" id="345 Xenia Springall" name="state house" value="345 Xenia Springall" />
                        <label htmlFor="345 Xenia Springall">Xenia Springall</label>
                    </div>
                    <legend>Select a Congress:</legend>
                    <div>
                        <input onChange={(e) => {
                            setCongress(e.target.value)
                        }} type="radio" id="123 Prudi Franzolini" name="congress" value="123 Prudi Franzolini" />
                        <label htmlFor="123 Prudi Franzolini">Prudi Franzolini</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setCongress(e.target.value)
                        }} type="radio" id="234 Lina Grandham" name="congress" value="234 Lina Grandham" />
                        <label htmlFor="234 Lina Grandham">Lina Grandham</label>
                    </div>
                    <div>
                        <input onChange={(e) => {
                            setCongress(e.target.value)
                        }} type="radio" id="345 Selig Le Batteur" name="congress" value="345 Selig Le Batteur" />
                        <label htmlFor="345 Selig Le Batteur">Selig Le Batteur</label>
                    </div>
                </fieldset>
                <button type="Submit">Submit</button>
            </form>
        </div>
    )

}
