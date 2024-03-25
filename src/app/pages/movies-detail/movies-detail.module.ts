import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movies-detail.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [MovieDetailComponent],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [MovieDetailComponent] 
})
export class MovieDetailModule {}
