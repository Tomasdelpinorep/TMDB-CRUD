import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service.service';
import { Movie } from '../../models/models/movie-list.interface';

@Component({
  selector: 'app-upcoming-movies-list',
  templateUrl: './upcoming-movies-list.component.html',
  styleUrls: ['./upcoming-movies-list.component.css']
})
export class UpcomingMoviesListComponent implements OnInit{

  upcomingList: Movie[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getUpcomingMoviesList().subscribe(resp =>{
      this.upcomingList = resp.results;
    })
  }

}
