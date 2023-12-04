import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie-service.service';
import { Movie } from '../../models/models/movie-list.interface';


@Component({
  selector: 'app-popular-movies-list',
  templateUrl: './popular-movies-list.component.html',
  styleUrls: ['./popular-movies-list.component.css']
})
export class PopularMoviesListComponent implements OnInit{

  popularList: Movie[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.movieService.getPopularMoviesList().subscribe(resp =>{
      this.popularList = resp.results;
    })
  }
}
