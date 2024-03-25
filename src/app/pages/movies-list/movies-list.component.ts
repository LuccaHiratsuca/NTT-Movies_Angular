import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/shared/services/movies/movies.service';
import { Movie } from 'src/app/shared/models/movies.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const title = params['title'];
      if (title) {
        this.searchMovies(title);
      }
    });
  }

  private searchMovies(title: string): void {
    this.movieService.searchMovies(title).subscribe(movies => {
      this.movies = movies;
    });
  }
}
