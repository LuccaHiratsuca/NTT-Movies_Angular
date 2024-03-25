import { createAction, props } from '@ngrx/store';

export const addToWatchlist = createAction(
  '[Movies Page] Add to Watchlist',
  props<{ movieId: string }>()
);

export const removeFromWatchlist = createAction(
  '[Movies Page] Remove from Watchlist',
  props<{ movieId: string }>()
);