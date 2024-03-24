import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movies.model';
import { selectMovies } from 'src/app/shared/store/Selectors/movies.selectors';
import * as MovieActions from 'src/app/shared/store/actions/movies.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {
  movies$: Observable<Movie[]>;
  canScrollLeft: boolean = false;
  canScrollRight: boolean = true;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private store: Store, private router: Router) {
    this.movies$ = this.store.pipe(select(selectMovies));
  }

  ngOnInit(): void {
    this.store.dispatch(MovieActions.searchMovies({ search: 'Batman' }));
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateArrowVisibility(), 0);
  }

  selectMovie(imdbID: string): void {
    this.store.dispatch(MovieActions.searchMovieById({ id: imdbID }));
    this.router.navigate(['/movie-detailed', imdbID]);
  }

  updateArrowVisibility() {
    const element = this.scrollContainer.nativeElement;
    this.canScrollLeft = element.scrollLeft > 0;
    this.canScrollRight = element.scrollWidth > element.clientWidth + element.scrollLeft;
  }

  scrollLeft() {
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({ left: -700, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 200);
  }
  
  scrollRight() {
    const element = this.scrollContainer.nativeElement;
    element.scrollBy({ left:700, behavior: 'smooth' });
    setTimeout(() => this.updateArrowVisibility(), 200);
  }
}
