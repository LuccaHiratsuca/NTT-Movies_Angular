import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from 'src/app/shared/models/movies.model';
import { DetailedMovie } from 'src/app/shared/models/detailed-movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<Movie[]> {
    const params = { apikey: environment.omdbApiKey, s: title };
    return this.http.get<{ Search: Movie[] }>(`${this.apiUrl}`, { params }).pipe(
      map(response => response.Search) 
    );
  }

  searchMoviesById(id: string): Observable<DetailedMovie> {
    const params = { apikey: environment.omdbApiKey, i: id };
    return this.http.get<DetailedMovie>(`${this.apiUrl}`, { params });
  }
    
}
