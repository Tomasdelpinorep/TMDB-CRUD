import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountDetailsResponse } from '../models/account-details';
import { environment } from '../../environments/environment.development';
import { UserListsResponse } from '../models/user-lists.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) {}

  getAccountDetails() :Observable<AccountDetailsResponse>{
    return this.http.get<AccountDetailsResponse>
    (`https://api.themoviedb.org/3/account?api_key=${environment.apiKey}&session_id=${sessionStorage.getItem('SESSION_ID')}`);
  }

  getUserLists(accountId :number): Observable<UserListsResponse>{
    return this.http.get<UserListsResponse>(`${environment.baseUrl}/account/${accountId}/lists?api_key=${environment.apiKey}&session_id=${sessionStorage.getItem('SESSION_ID')}`);
  }

//   getWatchListMovies(): Observable<MovieListResponse>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     return this.http.get<MovieListResponse>
//     (`https://api.themoviedb.org/3/account/${accountId}/watchlist/movies?api_key=${environment.apiKey}&session_id=${sessionId}`, {
//       headers: {
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     });
//   }

//   getFavoriteMovies(): Observable<MovieListResponse>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     return this.http.get<MovieListResponse>
//     (`https://api.themoviedb.org/3/account/${accountId}/favorite/movies?api_key=${environment.apiKey}&session_id=${sessionId}`,{
//       headers: {
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     });
//   }

  
//   addMovieToWatchList(movieId: number): Observable<AddMovieToList>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     return this.http.post<AddMovieToList>
//     (`https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${environment.apiKey}&session_id=${sessionId}`,{
//       "media_type": "movie",
//       "media_id": movieId,
//       "watchlist": true
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     });
//   }

//   addMovieToFavorite(movieId: number): Observable<AddMovieToList>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     return this.http.post<AddMovieToList>
//     (`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${environment.apiKey}&session_id=${sessionId}`,{
//       "media_type": "movie",
//       "media_id": movieId,
//       "favorite": true
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     });
//   }

//   removeMovieFromWatchList(movieId: number): Observable<AddMovieToList>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     console.log(accountId);
//     return this.http.post<AddMovieToList>
//     (`https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${environment.apiKey}&session_id=${sessionId}`,{
//       "media_type": "movie",
//       "media_id": movieId,
//       "watchlist": false
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     });
//   }

//   removeMovieFromFavorite(movieId: number): Observable<AddMovieToList>{
//     let accountId = sessionStorage.getItem('ACCOUNT_ID');
//     let sessionId = sessionStorage.getItem('SESSION_ID');
//     return this.http.post<AddMovieToList>
//     (`https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${environment.apiKey}&session_id=${sessionId}`,{
//       media_type: "movie",
//       media_id: movieId,
//       watchlist: false
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${environment.apiKey}`
//       }
//     })
//   }
}