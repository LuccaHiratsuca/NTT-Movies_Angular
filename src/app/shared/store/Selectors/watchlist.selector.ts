import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WatchlistState } from '../../models/watchlist.model';

export const selectWatchlistFeature = createFeatureSelector<WatchlistState>('watchlistFeature');

export const selectWatchlist = createSelector(
  selectWatchlistFeature,
  (state: WatchlistState) => state.ids
);