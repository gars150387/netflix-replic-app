import React,  { useEffect } from 'react'
import {useParams} from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMoviesOrSeries, getMoviesOrSeries } from '../../features/movie/movieSlice'


export const MovieDetails = () => {
  const { imdbID } = useParams();

  const dispatch = useDispatch();

  const data = useSelector(getMoviesOrSeries)

  useEffect(() => {
    dispatch(fetchAsyncMoviesOrSeries(imdbID))
  }, [dispatch, imdbID])
  
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">
          {data.title}
        </div>
        <div className="movie-rating">
          <span>
            IMDB rating <i className="fa fa-star" /> : {data.imdbRating}
          </span>
          <span>
            IMDB votes <i className="fa fa-rhunds-up" /> : {data.imdbVotes}
          </span>
          <span>
            Run time <i className="fa fa-filmr" /> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar" /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">
          {data.Plot}
        </div>
        <div className="movie-info">
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genres}</span>
          </div>
          <div>
            <span>Languages</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-rigth">
      <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  )
}
