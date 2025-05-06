import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to="/">Blog</Link>
        <Link to='/login'>Login</Link>
        <Link to='/create-post'>Create post</Link>
        <button className='login-btn'>Sign out</button>
      <h2>nav page </h2>
    </nav>
  )
}

export default Navbar
