import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from '../reducers/movies.reducers';

export const selectMovieState = createFeatureSelector<MoviesState>('movies');

export const selectMovies = createSelector(
  selectMovieState,
  (state: MoviesState) => state.movies
);

export const selectMoviesError = createSelector(
  selectMovieState,
  (state: MoviesState) => state.error
);

export const selectSelectedMovie = createSelector(
  selectMovieState,
  (state: MoviesState) => state.selectedMovie
);

