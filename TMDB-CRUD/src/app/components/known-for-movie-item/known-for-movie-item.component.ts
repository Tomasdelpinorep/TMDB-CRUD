import { Component, Input } from '@angular/core';
import { CreditedMovie } from '../../models/models/movie-credits.interface';

@Component({
  selector: 'app-known-for-movie-item',
  templateUrl: './known-for-movie-item.component.html',
  styleUrls: ['./known-for-movie-item.component.css']
})
export class KnownForMovieItemComponent {

  @Input() movie!: CreditedMovie;
  
  getMovieImage(){
    return 'https://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }

}
