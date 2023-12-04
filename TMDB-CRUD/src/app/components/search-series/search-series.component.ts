import { Component, EventEmitter, Output } from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../models/models/serie-list.interface';

@Component({
  selector: 'app-search-series',
  templateUrl: './search-series.component.html',
  styleUrls: ['./search-series.component.css']
})
export class SearchSeriesComponent {
  constructor(private serieService :SerieService){}
  searchedSerieList :Serie[] = [];
  @Output() sendSearchedSerieList = new EventEmitter<Serie[]>();

  onEnter(searchQuery :string){
    this.serieService.getSerieListWithQuery(searchQuery).subscribe(resp => {
      this.searchedSerieList = resp.results;
      this.sendSearchedSerieList.emit(this.searchedSerieList);
    })
  }
}
