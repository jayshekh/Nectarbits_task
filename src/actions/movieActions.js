// src/actions/movieActions.js

// Action types
// export const FETCH_MOVIESS = 'FETCH_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

// Action creators
export const fetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});
