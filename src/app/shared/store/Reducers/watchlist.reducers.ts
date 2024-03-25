import { createReducer, on } from '@ngrx/store';
import * as WatchlistActions from '../actions/watchlist.actions';
import { WatchlistState } from '../../models/watchlist.model';

export const initialState: WatchlistState = {
  ids: [],
};

export const watchlistReducer = createReducer(
  initialState,
  on(WatchlistActions.addToWatchlist, (state, { movieId }) => ({
    ...state,
    ids: state.ids.includes(movieId) ? state.ids : [...state.ids, movieId],
  })),
  on(WatchlistActions.removeFromWatchlist, (state, { movieId }) => ({
    ...state,
    ids: state.ids.filter(id => id !== movieId),
  }))
);
