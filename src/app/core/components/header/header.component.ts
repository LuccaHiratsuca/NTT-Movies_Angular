import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  searchText: string = ''; 
  showSearch: boolean = false;

  constructor(private router: Router) {
  }

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started to:', event.url);
      }
    });
  }

    
}