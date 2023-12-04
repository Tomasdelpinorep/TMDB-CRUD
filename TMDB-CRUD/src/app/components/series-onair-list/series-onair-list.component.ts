import { Component } from '@angular/core';
import { SerieService } from '../../services/serie.service';
import { Serie } from '../../models/models/serie-list.interface';

@Component({
  selector: 'app-series-onair-list',
  templateUrl: './series-onair-list.component.html',
  styleUrls: ['./series-onair-list.component.css']
})
export class SeriesOnairListComponent {

  seriesOnAirList: Serie[] = [];

  constructor(private serieService: SerieService){}

  ngOnInit(): void {
    this.serieService.getSeriesOnAir().subscribe(resp =>{
      this.seriesOnAirList = resp.results;
    })
  }
}
