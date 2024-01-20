"use client"
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import './signup.css';

export default function signUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [state, setState] = useState('')
  const [address, setAddress] = useState('')
  const [ssn, setSsn] = useState('')
  const [stateId, setStateId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className='sign-up-form'>
      <div className='form-container'>
      <Text fontSize='4xl' color="gold">Sign Up</Text>
        <form>
        <FormControl>
          <FormLabel>First name
            <Input required id='firstName' type='text' placeholder='First name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </FormLabel>
          <FormLabel>Last name
            <Input required id='lastName' type='text' placeholder='Last name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </FormLabel>
          <FormLabel>Email address
            <Input required id='email' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormLabel>
          <FormLabel>Password
            <Input required id='password' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormLabel>
          <FormLabel>Confirm Password
            <Input required id='confirmPassword' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </FormLabel>
          <FormLabel>Primary Address
            <Input required id='address' type='text' placeholder='Primary Address' value={address} onChange={(e) => setAddress(e.target.value)}/>
          </FormLabel>
          <FormLabel>State
          <Select required id='state' type='text' placeholder='--' value={state} onChange={(e) => setState(e.target.value)} >
            <option>CA</option>
          </Select>
          </FormLabel>
          <FormLabel>SSN
            <Input required id='ssn' type='text' placeholder='SSN' value={ssn} onChange={(e) => setSsn(e.target.value)} />
          </FormLabel>
          <FormLabel>ID Number/Driver ID
            <Input required id='stateId' type='text' placeholder='State ID' value={stateId} onChange={(e) => setStateId(e.target.value)} />
          </FormLabel>
        </FormControl>
        <button type='submit'>Sign Up</button>
        </form>
      </div>
    </section>
  )
}
