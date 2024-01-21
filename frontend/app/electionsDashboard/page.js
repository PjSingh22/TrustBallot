"use client";
import React from 'react'
import { useUserContext } from '../../context';

export default function electionsDashboard() {
  const { votes } = useUserContext();
  console.log(votes)
  return (
    <div>
      <h1>Elections Dashboard</h1>
      <div className='votes'>

      </div>
    </div>
  )
}
