import { createReducer, on } from '@ngrx/store';
import * as WatchlistActions from '../actions/watchlist.actions';
import { WatchlistState } from '../../models/watchlist.model';

export const initialState: WatchlistState = {
  watchlist: [],
};

export const watchlistReducer = createReducer(
  initialState,
  on(WatchlistActions.addToWatchlist, (state, { movies }) => {
    const currentWatchlist = Array.isArray(state.watchlist) ? state.watchlist : [];
    return {
      ...state,
      watchlist: [
        ...currentWatchlist,
        ...movies.filter(movie => !currentWatchlist.some(m => m.imdbID === movie.imdbID)),
      ],
    };
  }),  
  
  on(WatchlistActions.removeFromWatchlist, (state, { movieId }) => ({
    ...state,
    watchlist: state.watchlist.filter(movie => movie.imdbID !== movieId),
  })),
  on(WatchlistActions.loadWatchlistSuccess, (state, { movies }) => ({
    ...state,
    watchlist: movies,
  })),
);
