import { createReducer, on } from '@ngrx/store';
import { Movie } from '../../models/movies.model';
import { DetailedMovie } from '../../models/detailed-movie.model';
import * as MovieActions from '../actions/movies.actions';

export interface MoviesState {
  movies: Movie[];
  selectedMovie: DetailedMovie | null;
  error: any;
}

export const initialState: MoviesState = {
  movies: [],
  error: null,
  selectedMovie: null
};


export const moviesReducer = createReducer(
  initialState,
  on(MovieActions.searchMoviesSuccess, (state, { movies }) => ({
    ...state,
    movies,
    error: null
  })),
  on(MovieActions.searchMoviesFailure, (state, { error }) => ({
    ...state,
    movies: [],
    error
  })),
  on(MovieActions.searchMovieByIdSuccess, (state, { movie }) => ({
    ...state,
    selectedMovie: movie
  })),
  on(MovieActions.searchMovieByIdFailure, (state, { error }) => ({
    ...state,
    error: error
  }))

);
