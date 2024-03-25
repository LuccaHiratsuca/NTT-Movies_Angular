import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { MovieDetailComponent } from './pages/movies-detail/movies-detail.component';
import { UnderConstructionComponent } from './core/pages/under-construction/under-construction.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'watch-list',
    component: WatchListComponent
  },
  {
    path: 'movie-detailed/:id',
    component: MovieDetailComponent
  },
  {
    path: 'movielist',
    component:MoviesListComponent
  },
  {
    path: 'all',
    component: UnderConstructionComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
