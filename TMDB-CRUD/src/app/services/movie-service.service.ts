import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieListResponse } from '../models/models/movie-list.interface';
import { TrendingMoviesResponse } from '../models/models/trending-movies';
import { ImageListResponse } from '../models/models/imageList';
import { MovieDetailsResponse } from '../models/models/movie-details.interface';
import { ActorListCreditsResponse } from '../models/models/actor-list-credits.interface';
import { MovieCreditsListResponse } from '../models/models/movie-credits.interface';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMoviesList(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>
    ('https://api.themoviedb.org/3/movie/popular?api_key=fba6287e1b5585e45727ead4703af755');
  }

  getUpcomingMoviesList(): Observable<MovieListResponse>{
    return this.http.get<MovieListResponse>
    ('https://api.themoviedb.org/3/movie/upcoming?api_key=02bd87fa25457bdbc212118905ab3ec0');
  }

  getTrendingMoviesList(): Observable<TrendingMoviesResponse> {
    return this.http.get<TrendingMoviesResponse>(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=fba6287e1b5585e45727ead4703af755`
    );
  }

  getTrendingMoviesBackDrops(movieId:number):Observable<ImageListResponse>{
    return this.http.get<ImageListResponse>(`
    https://api.themoviedb.org/3/movie/${movieId}/images`);
  }

  getFilmById(id: number): Observable <MovieDetailsResponse>{
    return this.http.get<MovieDetailsResponse>
    (`https://api.themoviedb.org/3/movie/${id}?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

  getCreditsByMovie(movieId: number): Observable <ActorListCreditsResponse>{
    return this.http.get<ActorListCreditsResponse>
    (`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

  getMovieListWithQuery(query :string): Observable <MovieListResponse>{
    return this.http.get<MovieListResponse>
    (`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

  getMovieCreditList(actorId:number): Observable <MovieCreditsListResponse>{
    return this.http.get<MovieCreditsListResponse>
    (`
    https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

}