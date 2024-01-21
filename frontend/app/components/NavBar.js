"use client";
import React from 'react'
import { useUserContext } from '../../context';
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const { isUserLoggedIn, setIsUserLoggedIn } = useUserContext();
  const router = useRouter();

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    sessionStorage.clear();
    router.push('/')
  }
  return (
    <nav className="nav-bar">
      <h1>California TrustBallot</h1>
      {isUserLoggedIn ? <button className="logout" onClick={handleLogout}>Log Out</button> : null}
    </nav>
  )
}
