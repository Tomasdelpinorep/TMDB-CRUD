import { Component, Input } from '@angular/core';
import { Movie } from '../../models/models/movie-list.interface';


@Component({
  selector: 'app-searched-movies-list',
  templateUrl: './searched-movies-list.component.html',
  styleUrls: ['./searched-movies-list.component.css']
})
export class SearchedMoviesListComponent {
  @Input() searchedMovieList! :Movie[];
}
