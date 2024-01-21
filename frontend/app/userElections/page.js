"use client"
import React, { useState } from "react";
import CA_primary_data from "../sample-test-data/ballotpedia-CA-primary-election-sample";
import CA_general_data from "../sample-test-data/ballotpedia-CA-general-election-sample";
import './userElections.css';
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

export default function userElections() {

    const userDistrict = '24'
    // const [vote, setVote] = useState({})

    function singleElection(electionData, electionType) {
        const { success, data, message } = electionData
        const { election_date, districts} = data
        if (success) {
            return <div className="single-election">
            <h1>{electionType} Election Data</h1>
            Date of Election: {election_date}
            {districts.map((district) => {
                const { name, type, races } = district
                let splitName = name.split(' ');
                return (
                    splitName[splitName.length-1] === userDistrict && <div key={district.id}>
                        {console.log('hitting inside the split')}
                        <h1>{name} {type}</h1>
                        {races.map((race) => {
                            console.log('race', race)
                            const { candidates, office } = race
                            return (
                                <fieldset className="election-ballot">
                                    <legend>{office.name}</legend>
                                    {candidates && candidates.map((candidate) => {
                                        return (
                                            <div key={candidate.id}>
                                                <input type="radio" id={candidate.id} name={race.id} value={candidate.id} />
                                                <label for={candidate.id}>{candidate.person.name}</label>
                                            </div>
                                            )})}
                                    <div>
                                        <input type="radio" id='none' value='none' name={race.id} />
                                        <label for='none'>None</label>
                                    </div>
                                </fieldset>
                                )
                            })
                        }
                    </div>)
            })}
        </div> 
        } else {
            <h1>404 error</h1> 
        }
    }

    return (
        <div className="election-page">
            {singleElection(CA_general_data, 'General')}
            {singleElection(CA_primary_data, 'Primary')}
            <button>Submit Vote</button>
        </div>
    )
}