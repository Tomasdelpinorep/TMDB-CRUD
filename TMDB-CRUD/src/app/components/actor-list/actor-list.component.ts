import { Component, Input, OnInit } from '@angular/core';
import { MovieDetailsResponse } from '../../models/models/movie-details.interface';
import { Actor } from '../../models/models/actor-list.interface';
import { Cast } from '../../models/models/actor-list-credits.interface';
import { MovieService } from '../../services/movie-service.service';

@Component({
  selector: 'app-actor-list',
  templateUrl: './actor-list.component.html',
  styleUrls: ['./actor-list.component.css']
})
export class ActorListComponent implements OnInit{

  // Este input es el que recibe el id de la película desde el componente padre, movie-details-page.component.ts
  @Input() movieId!: number;
  actorsList!: Actor[];
  cast!: Cast[];
  movie!: MovieDetailsResponse;
  
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getFilmById(this.movieId).subscribe(resp => {
      this.movie = resp;
    });

    this.movieService.getCreditsByMovie(this.movieId).subscribe(resp => {
      this.cast = resp.cast.filter(c => c.known_for_department == "Acting");
    });
  }
}
