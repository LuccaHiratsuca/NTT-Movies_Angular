import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './shared/store/reducers/movies.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './shared/store/effects/movies.effects';
import { MovieDetailModule } from './pages/movies-detail/movies-detail.module';
import { watchlistReducer } from './shared/store/reducers/watchlist.reducers';
import { WatchListModule } from './pages/watch-list/watch-list.module';
import { WatchlistEffects } from './shared/store/effects/watchlist.effects';
import { MoviesListModule } from './pages/movies-list/movies-list.module';

// Import the StoreDevtoolsModule
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    MoviesListModule,
    MovieDetailModule,
    WatchListModule,


    StoreModule.forRoot({ 
      movies: moviesReducer,
      watchlist: watchlistReducer
    
    }),
    StoreModule.forFeature('watchlistFeature', {
      watchlist: watchlistReducer
    }),
    EffectsModule.forRoot([
      MovieEffects,
      WatchlistEffects
    ]),
    // Register the StoreDevtoolsModule
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
