"use client"
import React, { useState } from 'react'

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
      <form>
        
      </form>
    </section>
  )
}
