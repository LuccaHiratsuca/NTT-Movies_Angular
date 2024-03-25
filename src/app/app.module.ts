import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './shared/store/Reducers/movies.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './shared/store/Effects/movies.effects';
import { MovieDetailModule } from './pages/movies-detail/movies-detail.module';
import { watchlistReducer } from './shared/store/Reducers/watchlist.reducers';
import { WatchListModule } from './pages/watch-list/watch-list.module';
import { WatchlistEffects } from './shared/store/Effects/watchlist.effects';

// Import the StoreDevtoolsModule
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'; // Import environment to use it for configuration


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
    MovieDetailModule,
    WatchListModule,
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
