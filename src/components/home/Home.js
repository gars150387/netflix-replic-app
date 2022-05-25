import React,{ useEffect } from 'react'
import { MovieListing } from '../movieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movie/movieSlice'



export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsyncMovies())
    dispatch(fetchAsyncShows())
  }, [dispatch])
  
  return (
    <div>
          <div className='banner-img'></div>
          <MovieListing />
    </div>
  )
}