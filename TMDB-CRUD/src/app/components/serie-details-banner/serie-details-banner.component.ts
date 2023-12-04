import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, SerieDetailsResponse } from '../../models/models/serie-details.interface';
import { SerieService } from '../../services/serie.service';

@Component({
  selector: 'app-serie-details-banner',
  templateUrl: './serie-details-banner.component.html',
  styleUrls: ['./serie-details-banner.component.css']
})
export class SerieDetailsBannerComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  serieDetail!: SerieDetailsResponse;
  serieId: number = 0;
  genres: Genre[] = [];
  releaseDate: string = '';
  seasons: number = 0;
  
  constructor(private serieService: SerieService){
    this.serieId = Number(this.route.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.serieService.getSerieById(this.serieId).subscribe(resp=>{
      this.serieDetail = resp;
      this.genres = resp.genres;
      this.releaseDate = resp.first_air_date;
      this.seasons = resp.number_of_seasons;
    }) 
  }

  getSerieImage(){
    return `https://image.tmdb.org/t/p/w220_and_h330_face${this.serieDetail.poster_path}`;
  }
}
