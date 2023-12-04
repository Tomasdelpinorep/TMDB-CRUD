import { Component } from '@angular/core';
import { Movie } from '../../models/models/movie-list.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  searchedMovieList: Movie[] = [];

  isSearchEmpty() {
    if (this.searchedMovieList.length == 0) return true;

    return false;
  }

  loadSearchedList(event :any){
    this.searchedMovieList = event;
  }
}
