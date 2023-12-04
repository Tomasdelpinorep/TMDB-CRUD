import { Component } from '@angular/core';
import { Movie } from '../../models/models/movie-list.interface';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent {
  searchedMovieList: Movie[] = [];

  isSearchEmpty() {
    if (this.searchedMovieList.length == 0) return true;

    return false;
  }

  loadSearchedList(event :any){
    this.searchedMovieList = event;
  }
}