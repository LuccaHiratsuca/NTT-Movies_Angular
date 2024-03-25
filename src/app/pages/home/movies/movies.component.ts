import { MovieService } from './../../../shared/services/Movies/movies.service';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movies.model';
import { selectMovies } from 'src/app/shared/store/Selectors/movies.selectors';
import * as MovieActions from 'src/app/shared/store/actions/movies.actions';
import { Router } from '@angular/router';
import * as WatchlistActions from 'src/app/shared/store/actions/watchlist.actions';
import { selectWatchlist } from 'src/app/shared/store/Selectors/watchlist.selector';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() topic!: string;
  @Input() title!: string;

  movies$: Observable<Movie[]>;
  
  canScrollLeft: boolean = false;
  canScrollRight: boolean = true;
  watchlist$: Observable<Movie[]>;
  watchlistIds: string[] = []; 
  private subscription = new Subscription(); 

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private store: Store, private router: Router, private movieService: MovieService) {
    this.movies$ = this.store.pipe(select(selectMovies));
    this.watchlist$ = this.store.pipe(select(selectWatchlist));
  }

  ngOnInit(): void {

    if (this.topic) {
      this.movies$ = this.movieService.searchMovies(this.topic);
    } else {
      console.error("Topic is required for MoviesComponent.");
    }

    this.store.dispatch(WatchlistActions.loadWatchlist());
    this.loadWatchlistFromLocalStorage();
    this.watchlist$.subscribe(movies => {
      this.watchlistIds = movies.map(movie => movie.imdbID);
      localStorage.setItem('watchlist', JSON.stringify(movies));
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateArrowVisibility(), 0);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }

  selectMovie(imdbID: string): void {
    this.store.dispatch(MovieActions.searchMovieById({ id: imdbID }));
    this.router.navigate(['/movie-detailed', imdbID]);
  }

  updateArrowVisibility(): void {
    const element = this.scrollContainer.nativeElement;
    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollWidth > element.clientWidth + element.scrollLeft;
  }

  scrollLeft(): void {
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({ left: -700, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 200);
  }

  scrollRight(): void {
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({ left: 700, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 200);
  }

  isInWatchlist(movieId: string): boolean {
    return this.watchlistIds.includes(movieId);
  }
    
  toggleWatchlist(movie: Movie, event: MouseEvent): void {
    event.stopPropagation();
    if (this.isInWatchlist(movie.imdbID)) {
      this.store.dispatch(WatchlistActions.removeFromWatchlist({ movieId: movie.imdbID }));
      this.removeMovieFromLocalStorage(movie.imdbID);
    } else {
      this.store.dispatch(WatchlistActions.addToWatchlist({ movies: [movie] }));
      this.addMovieToLocalStorage(movie);
    }
  }

  private loadWatchlistFromLocalStorage(): void {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (storedWatchlist) {
      const watchlist: Movie[] = JSON.parse(storedWatchlist);
      this.watchlistIds = watchlist.map(movie => movie.imdbID);
    }
  }

  private addMovieToLocalStorage(movie: Movie): void {
    const storedWatchlist = localStorage.getItem('watchlist');
    const watchlist = storedWatchlist ? JSON.parse(storedWatchlist) : [];
    watchlist.push(movie);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
  }

  private removeMovieFromLocalStorage(movieId: string): void {
    const storedWatchlist = localStorage.getItem('watchlist');
    if (!storedWatchlist) return;

    const watchlist: Movie[] = JSON.parse(storedWatchlist);
    const filteredWatchlist = watchlist.filter(movie => movie.imdbID !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(filteredWatchlist));
  }
}
