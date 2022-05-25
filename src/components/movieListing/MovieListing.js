import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movie/movieSlice'
import { MovieCard } from '../movideCard/MovieCard'

import '../movieListing/MovieListing.scss'

export const MovieListing = () => {

  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  let renderMovies, renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => {
      console.log('movie', movies)
      return (
        <MovieCard key={index} data={movie} />
    )}
  )
  ) : (<div className="movies-error"><h3>{movies.error}</h3></div>)

  renderShows = shows.Response === "True" ? (
    shows.Search.map((show, index) => {
      console.log('show', show)
      return (
        <MovieCard key={index} data={show} />
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
    <div className='show-list'>
      <h2>Shows</h2>
      <div className='movie-container'>
        {renderShows}
      </div>
    </div>
  </div>
)
}
