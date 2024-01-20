"use client"
import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Option,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default function signUp() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [ssn, setSsn] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <section>
      <h1>Sign Up</h1>

      <FormControl isRequired>
        <FormLabel>First name
          <Input placeholder='First name' />
        </FormLabel>

        <FormLabel>Last name
          <Input placeholder='Last name' />
        </FormLabel>

        <FormLabel>Email address
          <Input placeholder='Email'/>
        </FormLabel>

        <FormLabel>Password
          <Input placeholder='Password'/>
        </FormLabel>

        <FormLabel>Confirm Password
          <Input placeholder='Confirm Password'/>
        </FormLabel>

        <Select placeholder='State'>
          <option>CA</option>
        </Select>

        <FormLabel>SSN
          <Input placeholder='SSN'/>
        </FormLabel>

        <FormLabel>ID Number/Driver ID
          <Input placeholder='ID'/>
        </FormLabel>

        <Button type='submit'>Submit</Button>
      </FormControl>
    </section>
  )
}
