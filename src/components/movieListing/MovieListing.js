import React from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import { Settings } from '../../common/setting'
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
        <Slider {...Settings}>{renderMovies}</Slider>
      </div>
    </div>
    <div className='movie-list'>
      <h2>Shows</h2>
      <div className='movie-container'>
        <Slider {...Settings}>{renderShows}</Slider>
      </div>
    </div>
  </div>
)
}
