import React from 'react'
import './Navbar.css'
import User from '../user/User'



const Navbar = () => {
  return (
    <div className='navbar'>
        <img  src='./images/logo.png' />
        <User />
    </div>
  )
}

export default Navbar
 