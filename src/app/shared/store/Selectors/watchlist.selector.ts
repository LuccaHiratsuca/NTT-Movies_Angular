import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WatchlistState } from '../../models/watchlist.model';

export const selectMoviesState = createFeatureSelector<WatchlistState>('watchlist');

export const selectWatchlist = createSelector(
  selectMoviesState,
  (state: WatchlistState) => state.watchlist
);

export const selectWatchlistIds = createSelector(
  selectWatchlist,
  (watchlist) => watchlist.map(movie => movie.imdbID)
);
