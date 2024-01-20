"use client"
import React, { useState } from 'react'
import seeders from '../seeders'

export default function signIn() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [ssn, setSsn] = useState('')

  console.log(id)

  const handleSubmit = (e) => {
    e.preventDefault()

  }



  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>
          ID Number/Driver ID
          <input id='id' type="text" placeholder='Type info here...' onChange={(e) => setId(e.target.value)} />
        </label>
        <label htmlFor='password'>
          Password
          <input id='password' type="password" placeholder='Type info here...' onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label htmlFor='ssn'>
          SSN
          <input id='ssn' type="text" placeholder='Type info here...' onChange={(e) => setSsn(e.target.value)} />
        </label>
        <button type='submit'>Sign In</button>
      </form>
    </section>
  )
}
