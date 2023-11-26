import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>This is Homepage</h1>
        <Link to="/login">Login</Link>
        <Link to="/listings">Listings</Link>
    </div>
  )
}

export default Home
