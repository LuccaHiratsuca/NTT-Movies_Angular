import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  searchText: string = ''; 

  constructor(private router: Router) {}

  searchMovies(): void {
    this.router.navigate(['/movielist'], { queryParams: { title: this.searchText } });
  }  
}
