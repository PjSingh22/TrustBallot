"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
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
  const [stateId, setStateId] = useState('123456789')
  const [password, setPassword] = useState('fF44@ROu\\g?8')
  const [ssn, setSsn] = useState('435478710')
  const router = useRouter();

  console.log(seeders[0].password, seeders[0].ssn)

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(seeders[0].password === password)
    for(let i = 0; i < seeders.length; i++) {
      if (seeders[i].password === password && ssn === seeders[i].ssn.split('-').join('')) {
        sessionStorage.setItem('user', JSON.stringify(seeders[i]))
        router.push('/walletconnect')
        return
      } else {
        alert('Incorrect ID, Password, or SSN')
        return
      }
    }
  }

  return (
    <section className='sign-in-form'>
      <div className='form-container'>
        <Text fontSize='4xl' color="gold">Sign In</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor='id'>ID Number/Driver ID
              <Input required id='id' type="text" placeholder='Type info here...' value={stateId} onChange={(e) => setStateId(e.target.value)} />
            </FormLabel>
            <FormLabel htmlFor='password'>Password
              <Input required id='password' type="text" placeholder='Type info here...' value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormLabel>
            <FormLabel htmlFor='ssn'>SSN
              <Input required id='ssn' type="text" placeholder='Type info here...' value={ssn} onChange={(e) => setSsn(e.target.value)} />
            </FormLabel>
          </FormControl>
          <button type='submit'>Sign In</button>
        </form>
      </div>
    </section>
  )
}
