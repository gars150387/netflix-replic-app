import React,{ useEffect } from 'react'
import { MovieListing } from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'



export const Home = () => {

  const dispatch = useDispatch()

  const movieStart = 'action'
  const showStart = 'comedy'

  useEffect((searchBar) => {
    dispatch(fetchAsyncMovies(movieStart))
    dispatch(fetchAsyncShows(showStart))
  }, [dispatch])
  
  return (
    <div>
          <div className='banner-img'></div>
          <MovieListing />
    </div>
  )
}
