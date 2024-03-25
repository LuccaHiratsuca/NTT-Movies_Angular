// src/app/shared/store/effects/movies.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { MovieService } from '../../services/movies/movies.service';
import * as MoviesActions from '../actions/movies.actions';
import { Movie } from '../../models/movies.model';
import { DetailedMovie } from '../../models/detailed-movie.model';

@Injectable()
export class MovieEffects {

  searchMovies$ = createEffect(() => this.actions$.pipe(
    ofType(MoviesActions.searchMovies),
    mergeMap((action) => this.movieService.searchMovies(action.search)
      .pipe(
        map(movies => MoviesActions.searchMoviesSuccess({ movies })),
        catchError(error => of(MoviesActions.searchMoviesFailure({ error })))
      )
    )
  ));

  searchMovieById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesActions.searchMovieById),
      mergeMap((action) => 
        this.movieService.searchMoviesById(action.id).pipe(
          map((movie: DetailedMovie) => MoviesActions.searchMovieByIdSuccess({ movie })),
          catchError(error => of(MoviesActions.searchMovieByIdFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}