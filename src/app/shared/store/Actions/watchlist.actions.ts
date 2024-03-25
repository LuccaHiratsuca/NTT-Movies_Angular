import { Movie } from '../../models/movies.model';
import { createAction, props } from '@ngrx/store';

export const addToWatchlist = createAction(
  '[Watchlist] Add to Watchlist',
  props<{ movies: Movie[] }>() // Notice 'movies' is now an array of Movie objects
);


export const removeFromWatchlist = createAction(
  '[Watchlist] Remove from Watchlist',
  props<{ movieId: string }>()
);

export const loadWatchlist = createAction(
  '[Watchlist] Load Watchlist'
);

export const loadWatchlistSuccess = createAction(
  '[Watchlist] Load Watchlist Success',
  props<{ movies: Movie[] }>()
);


export const loadWatchlistFailure = createAction(
  '[Watchlist] Load Watchlist Failure'
);
