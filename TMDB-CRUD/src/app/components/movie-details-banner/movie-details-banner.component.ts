import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Genre, MovieDetailsResponse } from '../../models/models/movie-details.interface';
import { MovieService } from '../../services/movie-service.service';
import { AccountService } from '../../services/account.service';


@Component({
  selector: 'app-movie-details-banner',
  templateUrl: './movie-details-banner.component.html',
  styleUrls: ['./movie-details-banner.component.css'],
})
export class MovieDetailsBannerComponent implements OnInit {
  route: ActivatedRoute;
  movieDetail!: MovieDetailsResponse;
  movieId: number = 0;
  genderList: Genre[] = [];
  releaseDate: string = '';
  runtime: number = 0;
  @Output() toEmit = new EventEmitter<number>();
  favourite: boolean = false;
  watchlist: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private accountService: AccountService
  ) {
    this.route = this.activatedRoute;
    this.movieId = Number(this.route.snapshot.params['id']);
  }

  getMovieImage() {
    return `https://image.tmdb.org/t/p/w220_and_h330_face${this.movieDetail.poster_path}`;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = Number(params['id']);

      if (sessionStorage.getItem('SESSION_ID') == null) {
        this.movieService.getFilmById(this.movieId).subscribe((resp) => {
          this.movieDetail = resp;
        });
      } else {
        const movieRequest = this.movieService.getFilmById(this.movieId);
        const favouriteRequest = this.accountService.getFavoriteMovies();
        const watchlistRequest = this.accountService.getWatchListMovies();

        forkJoin([movieRequest, favouriteRequest, watchlistRequest]).subscribe(
          ([movieResponse, favouriteResponse, watchlistResponse]) => {
            this.movieDetail = movieResponse;
            this.genderList = movieResponse.genres;
            this.releaseDate = movieResponse.release_date;
            this.runtime = movieResponse.runtime;

            for (let index = 0;index < favouriteResponse.results.length; index++ ) {
              if (favouriteResponse.results[index].id == this.movieId) {
                this.favourite = true;
              }
            }

            for (let index = 0; index < watchlistResponse.results.length; index++) {
              if (watchlistResponse.results[index].id == this.movieId) {
                this.watchlist = true;
              }
            }
          }
        );
      }

      this.toEmit.emit(this.movieId);
    });
  }

  addToWatchList() {
    this.accountService.addMovieToWatchList(this.movieId).subscribe((resp) => {
      if (resp.status_code == 1) {
        this.watchlist = true;
      } else {
        this.removeFromWatchList();
      }
    });
  }

  addToFavorite() {
    this.accountService.addMovieToFavorite(this.movieId).subscribe((resp) => {
      if (resp.status_code == 1) {
        this.favourite = true;
      } else {
        this.removeFromFavorite();
      }
    });
  }

  removeFromWatchList() {
    this.accountService
      .removeMovieFromWatchList(this.movieId)
      .subscribe((resp) => {
        if (resp.status_code == 13) {
          this.watchlist = false;
        } else {
          this.addToWatchList();
        }
      });
  }

  removeFromFavorite() {
    this.accountService
      .removeMovieFromFavorite(this.movieId)
      .subscribe((resp) => {
        if (resp.status_code == 13) {
          this.favourite = false;
        } else {
          this.addToFavorite();
        }
      });
  }

  toggleWatchList() {
    if (this.watchlist) {
      this.removeFromWatchList();
    } else {
      this.addToWatchList();
    }
  }

  toggleFavourite() {
    if (this.favourite) {
      this.removeFromFavorite();
    } else {
      this.addToFavorite();
    }
  }
}
