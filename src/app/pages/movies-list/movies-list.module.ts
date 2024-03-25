import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [MoviesListComponent],
  imports: [CommonModule, BrowserModule, CoreModule],
  exports: [MoviesListComponent],
})
export class MoviesListModule{}