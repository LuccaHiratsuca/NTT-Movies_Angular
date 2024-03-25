import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/core/core.module';
import { WatchListComponent } from './watch-list.component';

@NgModule({
  declarations: [WatchListComponent],
  imports: [CommonModule, BrowserModule, CoreModule],
  exports: [WatchListComponent],
})
export class WatchListModule{}