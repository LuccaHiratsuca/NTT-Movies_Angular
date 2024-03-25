import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './pages/home/home.module';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './shared/store/Reducers/movies.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './shared/store/Effects/movies.effects';
import { MovieDetailComponent } from './pages/movies-detail/movies-detail.component';
import { MovieDetailModule } from './pages/movies-detail/movies-detail.module';
import { watchlistReducer } from './shared/store/Reducers/watchlist.reducers';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    HomeModule,
    StoreModule.forRoot({ movies: moviesReducer}),
    StoreModule.forFeature('watchlistFeature', {
      watchlist: watchlistReducer
    }),
    EffectsModule.forRoot([MovieEffects]),
    MovieDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }