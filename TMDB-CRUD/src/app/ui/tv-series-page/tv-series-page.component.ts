import { Component } from '@angular/core';
import { Serie } from '../../models/models/serie-list.interface';

@Component({
  selector: 'app-tv-series-page',
  templateUrl: './tv-series-page.component.html',
  styleUrls: ['./tv-series-page.component.css']
})
export class TvSeriesPageComponent {
  searchedSerieList: Serie[] = [];

  isSearchEmpty() {
    if (this.searchedSerieList.length == 0) return true;

    return false;
  }

  loadSearchedList(event :any){
    this.searchedSerieList = event;
  }
}
