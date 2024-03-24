import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  searchText: string = ''; 
  showSearch: boolean = false;

  toggleSearch(): void {
    this.showSearch = !this.showSearch;
  }
}