"use client"
import React, { useState } from "react";
import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import './testElections.css';
import generalElectionAbi from '../../../backend/build/contracts/GeneralContract.json'
import { GeneralContractAddress } from "../../config";
import { ethers } from "ethers";
import { useUserContext } from "../components/context";

export default function testElections() {
    const { correctNetwork, setCorrectNetwork, isUserLoggedIn, setIsUserLoggedIn, currentAccount, setCurrentAccount } = useUserContext();
    const [USSenate, setUSSenate] = useState('')
    const [USHouse, setUSHouse] = useState('')
    const [congress, setCongress] = useState('')
    const [stateSenate, setStateSenate] = useState('')
    const [stateHouse, setStateHouse] = useState('')

    console.log(USSenate)
    // console.log(USHouse)
    // console.log(congress)
    // console.log(stateSenate)
    // console.log(stateHouse)

    const connectWallet = async () => {

    }

    const handleTestElectionFormSubmit = () => {

    }

    return (
        <>
            <form onSubmit={handleTestElectionFormSubmit}>
                <fieldset>
                    <legend>Select a US Senate</legend>
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
                    <legend>Select a US House</legend>
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
                    <legend>Select a State Senate</legend>
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
                    <legend>Select a State House</legend>
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
                    <legend>Select a Congress</legend>
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
        </>
    )

}
