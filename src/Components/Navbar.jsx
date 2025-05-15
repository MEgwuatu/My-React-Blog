import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({isAuth, logout}) => {



  return (
    <nav className='nav'>

        <Link to="/">Blog</Link>
        {
          !isAuth ? (<Link to='/login'>Login</Link>):(
            <>
            <Link to='/create-post'>Create post</Link>
            <button className='login-btn' onClick={logout}>Sign out</button>
            </>
        
          )
        }

        
         
    </nav>
  )
}

export default Navbar
