import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMoviesOrSeries, getMoviesOrSeries } from '../../features/movie/movieSlice'
import { FaStar, FaThumbsUp, FaFilm, FaCalendarAlt } from 'react-icons/fa'
import { removeMoviesOrShows } from '../../features/movie/movieSlice'

import './MovieDetails.scss'


export const MovieDetails = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getMoviesOrSeries)

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrSeries(imdbID))
    return () => {
      dispatch(removeMoviesOrShows())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (<div>...Loading</div>) : (
      <>      
      <div className="section-left">
        <div className="movie-title">
          {data.Title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB rating <FaStar className="FaStar" /> : {data.imdbRating}
          </span>
          <span>
            IMDB votes <FaThumbsUp className="FaThumbsUp" /> : {data.imdbVotes}
          </span>
          <span>
            Run time <FaFilm className="FaFilm" /> : {data.Runtime}
          </span>
          <span>
            Year <FaCalendarAlt className="FaCalendarAlt" /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director: </span>
            <span> {data.Director}</span>
          </div>
          <div>
            <span>Stars:</span>
            <span> {data.Actors}</span>
          </div>
          <div>
            <span>Genres:</span>
            <span> {data.Genre}</span>
          </div>
          <div>
            <span>Languages:</span>
            <span> {data.Language}</span>
          </div>
          <div>
            <span>Awards:</span>
            <span> {data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-rigth">
        <img src={data.Poster} alt={data.Title} />
      </div>
      </>
      )}
    </div>
  )
}
