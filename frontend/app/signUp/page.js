"use client"
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Option,
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
  const [id, setId] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section className='sign-up-form'>
      <Text fontSize='4xl' color="gold">Sign Up</Text>
      <form>
      <FormControl>
        <FormLabel>First name
          <Input required id='' type='' placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
        </FormLabel>        
        <FormLabel>Last name
          <Input required id='' type='' placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />
        </FormLabel>        
        <FormLabel>Email address
          <Input required id='' type='' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </FormLabel>        
        <FormLabel>Password
          <Input required id='' type='' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </FormLabel>        
        <FormLabel>Confirm Password
          <Input required id='' type='' placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
        </FormLabel>       
        <FormLabel>Primary Address
          <Input required id='' type='' placeholder='Primary Address' onChange={(e) => setAddress(e.target.value)}/>
        </FormLabel>        
        <FormLabel>State
        <Select required id='' type='' placeholder='--' onChange={(e) => setState(e.target.value)} >
          <option>CA</option>
        </Select>        
        </FormLabel>
        <FormLabel>SSN
          <Input required id='' type='' placeholder='SSN' onChange={(e) => setSsn(e.target.value)} />
        </FormLabel>        
        <FormLabel>ID Number/Driver ID
          <Input required id='' type='' placeholder='State ID'/>
        </FormLabel>        
      </FormControl>
      <button type='submit'>Sign Up</button>
      </form>
    </section>
  )
}
