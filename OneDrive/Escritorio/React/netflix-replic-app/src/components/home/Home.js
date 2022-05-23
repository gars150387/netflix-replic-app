import React,{ useEffect } from 'react'
import movieApi from '../../common/apis/movieApi'
import { MovieListing } from '../movieListing/MovieListing'
import {apikey} from '../../common/apis/movieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies } from '../../features/movie/movieSlice'


export const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {

    const movieText = "Harry"

    const fetchMovies = async () =>{
      const response = await movieApi
      .get( `?apiKey=${apikey}&s=${movieText}&type=movie`)
      .catch( (error) =>{
        console.loog("Error :", error)
      });
      dispatch(addMovies( response.data ))
    };
    fetchMovies()
    }, [])
  
  return (
    <div>
          <div className='banner-img'></div>
          <MovieListing />
    </div>
  )
}
