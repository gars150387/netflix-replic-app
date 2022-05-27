import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import movieApi from '../../common/apis/movieApi'
import {apikey} from '../../common/apis/movieApiKey'


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetcAsyncMovies', 
    async (searchBar) =>{

        const response = await movieApi
        .get( `?apiKey=${apikey}&s=${searchBar}&type=movie`);
        return response.data
})

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetcAsyncShows', 
    async (searchBar) =>{

        const response = await movieApi
        .get( `?apiKey=${apikey}&s=${searchBar}&type=series`);
        return response.data
})

export const fetchAsyncMoviesOrSeries = createAsyncThunk(
    'moviesOrSeries/fetchAsyncMoviesAndSeries', 
    async (id) =>{

        const response = await movieApi
        .get( `?apiKey=${apikey}&i=${id}&Plot=full`);
        return response.data
})


const initialState = {
    movies: {},
    shows: {},
    moviesOrSeries: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeMoviesOrShows: (state) =>{
            state.moviesOrSeries = {}
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () =>{
            console.log("pending")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled");
            return {
                ...state, movies: payload
            }
        },
        [fetchAsyncMovies.rejected]: () =>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled");
            return {
                ...state, shows: payload
            }
        },
        [fetchAsyncMoviesOrSeries.fulfilled]: (state, {payload}) =>{
            console.log("fulfilled");
            return {
                ...state, moviesOrSeries: payload
            }
        },

    },
})


export const { removeMoviesOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMoviesOrSeries = (state) => state.movies.moviesOrSeries;
export default movieSlice.reducer