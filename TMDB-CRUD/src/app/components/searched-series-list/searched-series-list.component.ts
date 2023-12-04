import { Component, Input } from '@angular/core';
import { Serie } from '../../models/models/serie-list.interface';


@Component({
  selector: 'app-searched-series-list',
  templateUrl: './searched-series-list.component.html',
  styleUrls: ['./searched-series-list.component.css']
})
export class SearchedSeriesListComponent {
  @Input() searchedSerieList! :Serie[];
}
