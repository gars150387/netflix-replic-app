import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movie/movieSlice'
import { MovieCard } from '../movideCard/MovieCard'

import '../movieListing/MovieListing.scss'

export const MovieListing = () => {

  const movies = useSelector(getAllMovies)

  console.log('useSelector(AllMovies)', movies)

  let renderMovies = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      console.log('movie', movies)
      return (
        <MovieCard key={index} data={movie} />
    )}
  )
  ) : (<div className="movies-error"><h3>{movies.error}</h3></div>)


return (
  <div className='movie-wrapper'>
    <div className='movie-list'>
      <h2>Movies</h2>
      <div className='movie-container'>
        {renderMovies}
      </div>
    </div>
  </div>
)
}
