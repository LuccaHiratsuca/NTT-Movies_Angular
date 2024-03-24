import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent, 
    MoviesComponent
  ],

  imports: [
    CommonModule, 
    BrowserModule, 
    CoreModule,
    RouterModule,
    FormsModule

  ],

  exports: [
    HomeComponent,
     MoviesComponent
    ],
})
export class HomeModule {}