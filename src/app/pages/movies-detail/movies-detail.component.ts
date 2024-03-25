import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DetailedMovie } from 'src/app/shared/models/detailed-movie.model';
import { selectSelectedMovie } from 'src/app/shared/store/Selectors/movies.selectors';
import * as MovieActions from 'src/app/shared/store/actions/movies.actions';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css'],
})
export class MovieDetailComponent implements OnInit {
  movie$: Observable<DetailedMovie | null>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.movie$ = this.store.pipe(select(selectSelectedMovie));
  }

  ngOnInit(): void {
    const imdbID = this.route.snapshot.paramMap.get('id');
    if (imdbID) {
      this.store.dispatch(MovieActions.searchMovieById({ id: imdbID }));
    }
  }

  goToWebsite(url: string): void {
    window.open(url, '_blank');
  }

  goToIMDB(imdbID: string): void {
    const imdbUrl = `https://www.imdb.com/title/${imdbID}`;
    window.open(imdbUrl, '_blank');
  }
  
}
