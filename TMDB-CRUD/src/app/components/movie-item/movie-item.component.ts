import { Component, Input } from '@angular/core';
import { Movie } from '../../models/models/movie-list.interface';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie!: Movie;

  getMovieImage(){

    if (this.movie.poster_path == null) {
      return "https://cdn-icons-png.flaticon.com/512/5266/5266579.png";
    }
    return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }
}
