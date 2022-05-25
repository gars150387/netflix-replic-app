import React from 'react'
import { Link } from 'react-router-dom'
// import { FaUserAlt } from 'react-icons/fa'
import './Header.scss'


export const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div className='logo'>Movie App</div>
      </Link>

      <div className='user-image'>
        <img src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' 
        alt='user' />

      </div>

    </div>
  )
}
