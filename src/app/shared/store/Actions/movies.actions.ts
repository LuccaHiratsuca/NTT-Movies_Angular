import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movies.model';
import { DetailedMovie } from '../../models/detailed-movie.model';

export const searchMovies = createAction(
  '[Movies Page] Search Movies',
  props<{ search: string }>()
);

export const searchMoviesSuccess = createAction(
  '[Movies API] Search Movies Success',
  props<{ movies: Movie[] }>()
);

export const searchMoviesFailure = createAction(
  '[Movies API] Search Movies Failure',
  props<{ error: string }>()
);


// BY ID:
export const searchMovieById = createAction(
  '[Movies] Search Movie By ID',
  props<{ id: string }>()
);

export const searchMovieByIdSuccess = createAction(
  '[Movies] Search Movie By ID Success',
  props<{ movie: DetailedMovie }>() 
);

export const searchMovieByIdFailure = createAction(
  '[Movies] Search Movie By ID Failure',
  props<{ error: any }>()
);