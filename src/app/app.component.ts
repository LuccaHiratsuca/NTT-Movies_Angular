import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as watchListActions from './shared/store/actions/watchlist.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(watchListActions.loadWatchlist());
  }
}