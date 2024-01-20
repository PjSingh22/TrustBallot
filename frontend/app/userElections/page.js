"use client"
import React, { useState } from "react";
import CA_primary_data from "../sample-test-data/ballotpedia-CA-primary-election-sample";
import CA_general_data from "../sample-test-data/ballotpedia-CA-general-election-sample";

export default function userElections() {

    const { success: general_success, data: general_data, message: general_message } = CA_general_data
    const { election_date: general_date, districts: general_districts } = general_data   
    const { success: primary_success, data: primary_data, message: primary_message } = CA_primary_data
    const { election_date: primary_date, districts: primary_districts } = primary_data   
    return (
        <>
            { general_success 
            ? (
            <>
                <h1>General Election Data</h1>
                Date of Election: {general_date}
                
            </>
            ) 
            : <h1>404 error</h1> }

            { primary_success
            ? (
            <>
                <h1>Primary Election Data</h1>
                Date of Election: {primary_date}


            </>
            ) 
            : <h1>404 error</h1> }

        </>
    )
}