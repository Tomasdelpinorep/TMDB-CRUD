import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { AccountDetailsResponse } from '../../models/models/account-details';
import { AccountService } from '../../services/account.service';
import { Movie } from '../../models/models/movie-list.interface';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css'],
})
export class AccountPageComponent implements OnInit {
  account!: AccountDetailsResponse;
  movieListFavourite: Movie[] = [];
  movieListWatchList: Movie[] = [];
  numOfFavouriteMovies: number = 0;
  numOfWatchListMovies: number = 0;
  constructor(private accountService: AccountService,) {}

  accountDetailsRequest = this.accountService.getAccountDetails();
  favoriteMoviesRequest = this.accountService.getFavoriteMovies();
  watchListRequest = this.accountService.getWatchListMovies();
  

  ngOnInit(): void {
    // this.accountService.getAccountDetails().subscribe((resp) => {
    //   this.account = resp;
    // });

    // this.accountService.getFavoriteMovies().subscribe((resp) => {
    //   this.movieListFavourite = resp.results;
    //   this.numOfFavouriteMovies = resp.results.length;
    // });

    // this.accountService.getWatchListMovies().subscribe((resp) => {
    //   this.movieListWatchList = resp.results;
    //   this.numOfWatchListMovies;
    // });

    forkJoin([this.accountDetailsRequest, this.favoriteMoviesRequest, this.watchListRequest]).subscribe(
      ([accountDetailsResp, favoriteMoviesResp, watchListResp]) => {
        this.account = accountDetailsResp;
        this.numOfFavouriteMovies = favoriteMoviesResp.total_results;
        this.numOfWatchListMovies = watchListResp.total_results;
        this.movieListFavourite = favoriteMoviesResp.results;
        this.movieListWatchList = watchListResp.results;
      }
    )
  }

  getAvatarImg() {
    return `https://www.gravatar.com/avatar/${this.account.avatar.tmdb.avatar_path}`;
  }
}
