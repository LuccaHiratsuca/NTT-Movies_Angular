import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, withLatestFrom, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Movie } from 'src/app/shared/models/movies.model';
import { selectMovies } from 'src/app/shared/store/selectors/movies.selectors';
import { selectWatchlist } from 'src/app/shared/store/selectors/watchlist.selector';
import { Router } from '@angular/router';
import * as WatchlistActions from 'src/app/shared/store/actions/watchlist.actions';
import { distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  watchlistMovies$!: Observable<Movie[]>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {
    this.loadWatchlist();
    this.watchlistMovies$ = this.store.pipe(
      select(selectWatchlist),
      map(movies => Array.from(new Set(movies.map(movie => movie.imdbID)))
        .map(id => movies.find(movie => movie.imdbID === id))
        .filter((movie): movie is Movie => Boolean(movie))),
      distinctUntilChanged()
    );
  }
  

  loadWatchlist(): void {
    this.store.dispatch(WatchlistActions.loadWatchlist());
  }

  selectMovie(imdbID: string): void {
    this.router.navigate(['/movie-detailed', imdbID]);
  }
}
