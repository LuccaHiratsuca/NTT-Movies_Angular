import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { MovieDetailComponent } from './pages/movies-detail/movies-detail.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})

export class AppRoutingModule { }