import { Component, Input, OnInit } from '@angular/core';
import { CreditedMovie } from '../../models/models/movie-credits.interface';
import { Actor } from '../../models/models/actor-list.interface';
import { MovieService } from '../../services/movie-service.service';

@Component({
  selector: 'app-known-for-list',
  templateUrl: './known-for-list.component.html',
  styleUrls: ['./known-for-list.component.css'],
})
export class KnownForListComponent implements OnInit {
  @Input() actorId!: number;
  knownForList: CreditedMovie[] = [];
  popularList!: Actor[];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovieCreditList(this.actorId).subscribe((resp) => {
      this.knownForList = resp.cast;
    });
  }
}
