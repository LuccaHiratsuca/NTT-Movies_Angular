import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { withLatestFrom, map, catchError } from 'rxjs/operators';
import * as WatchlistActions from '../actions/watchlist.actions';
import { Store, select } from '@ngrx/store';
import { WatchlistState } from '../../models/watchlist.model';
import { selectWatchlist } from '../Selectors/watchlist.selector';  

@Injectable()
export class WatchlistEffects {
  constructor(private actions$: Actions, private store: Store<WatchlistState>) {}

  saveWatchlist$ = createEffect(() => 
    this.actions$.pipe(
      ofType(WatchlistActions.addToWatchlist, WatchlistActions.removeFromWatchlist),
      withLatestFrom(this.store.pipe(select(selectWatchlist))),
      map(([_, watchlist]) => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
      }),      
    ),
    { dispatch: false }
  );

  loadWatchlist$ = createEffect(() => 
    this.actions$.pipe(
      ofType(WatchlistActions.loadWatchlist),
      map(() => {
        const watchlist = localStorage.getItem('watchlist');
        try {
          const movies = watchlist ? JSON.parse(watchlist) : [];
          return WatchlistActions.loadWatchlistSuccess({ movies });
        } catch (error) {
          console.error('Error parsing watchlist:', error);
          return WatchlistActions.loadWatchlistFailure();
        }
      })
    )
  );
}
