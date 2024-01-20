"use client"
import React, { useState } from 'react'
import seeders from '../seeders'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text
} from '@chakra-ui/react'
import './signin.css'

export default function signIn() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [ssn, setSsn] = useState('')

  console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault();

  }



  return (
    <section className='sign-in-form'>
      <Text fontSize='4xl' color="gold">Sign In</Text>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor='id'>ID Number/Driver ID
            <Input required id='id' type="text" placeholder='Type info here...' onChange={(e) => setId(e.target.value)} />
          </FormLabel>
          <FormLabel htmlFor='password'>Password
            <Input required id='password' type="password" placeholder='Type info here...' onChange={(e) => setPassword(e.target.value)} />
          </FormLabel>
          <FormLabel htmlFor='ssn'>SSN
            <Input required id='ssn' type="password" placeholder='Type info here...' onChange={(e) => setSsn(e.target.value)} />
          </FormLabel>
        </FormControl>
        <button type='submit'>Sign In</button>
      </form>
    </section>
  )
}
