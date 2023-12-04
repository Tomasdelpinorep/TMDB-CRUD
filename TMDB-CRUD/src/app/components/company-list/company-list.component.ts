import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsResponse, ProductionCompany } from '../../models/models/movie-details.interface';
import { MovieService } from '../../services/movie-service.service';
@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit{

  @Input() movieId!: number;
  companyList!: ProductionCompany[];
  movie!: MovieDetailsResponse;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getFilmById(this.movieId).subscribe(resp => {
      this.movie = resp;
      this.companyList = resp.production_companies;
    });
  }

}
