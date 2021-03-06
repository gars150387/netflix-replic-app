import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaSearch } from 'react-icons/fa'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'

import './Header.scss'


export const Header = () => {
  const dispatch = useDispatch()

  const [searchBar, setSearchBar] = useState('')

  const handleInputSearch = (e) =>{
    setSearchBar(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(fetchAsyncMovies(searchBar))
    dispatch(fetchAsyncShows(searchBar))
    setSearchBar('');
  }
  return (
    <div className='header'>
      
        <div className='logo'><Link to="/">Movie App</Link></div>
      
    <div className='search-bar'>
      <form onSubmit={ handleSubmit }>
          <input placeholder='Search Movies or Shows' type="text" onChange={handleInputSearch} 
          name="search" value={ searchBar } />
          <button type='submit'><FaSearch className='FaSearch'/></button>
      </form>
    </div>

      <div className='user-image'>
        <img src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
          alt='user' />
      </div>

    </div>
  )
}
