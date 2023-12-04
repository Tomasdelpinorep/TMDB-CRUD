import { Component} from '@angular/core';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.css']
})
export class MovieDetailsPageComponent{

  movieId: number = 0;

  setMovieId($event: number) {
    this.movieId = $event;
  }

}
