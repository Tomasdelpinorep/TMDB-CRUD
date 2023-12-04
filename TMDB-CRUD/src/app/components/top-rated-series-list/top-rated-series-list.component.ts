import { Component } from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../models/models/serie-list.interface';

@Component({
  selector: 'app-top-rated-series-list',
  templateUrl: './top-rated-series-list.component.html',
  styleUrls: ['./top-rated-series-list.component.css']
})
export class TopRatedSeriesListComponent {

  topRatedList: Serie[] = [];

  constructor(private serieService: SerieService){}

  ngOnInit(): void {
    this.serieService.getTopRatedSeries().subscribe(resp =>{
      this.topRatedList = resp.results;
    })
  }
}
