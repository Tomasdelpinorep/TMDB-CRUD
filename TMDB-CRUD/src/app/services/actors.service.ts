import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorListResponse } from '../models/models/actor-list.interface';
import { ActorDetailsResponse } from '../models/models/actor-details.interface';
import { ActorListCreditsResponse } from '../models/models/actor-list-credits.interface';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http :HttpClient) { }

  getActorList() :Observable<ActorListResponse>{
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}`);
  }

  getPagedActorList(page:number){
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?page=${page}&api_key=${environment.apiKey}`);
  }

  getTop10ActorList() :Observable<ActorListResponse>{
    return this.http.get<ActorListResponse>(`https://api.themoviedb.org/3/person/popular?api_key=${environment.apiKey}&limit=10`);
  }

  getActorDetails(actorId:number) :Observable<ActorDetailsResponse>{
    return this.http.get<ActorDetailsResponse>(`https://api.themoviedb.org/3/person/${actorId}?api_key=${environment.apiKey}`);
  }

  getActorsByMovie(movieId: number): Observable<ActorListCreditsResponse>{
    return this.http.get<ActorListCreditsResponse>(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${environment.apiKey}`);
  }

  getActorsBySerie(serieId: number): Observable<ActorListCreditsResponse>{
    return this.http.get<ActorListCreditsResponse>(`https://api.themoviedb.org/3/tv/${serieId}/credits?api_key=${environment.apiKey}`);
  }

  getActorListWithQuery(query :string): Observable <ActorListResponse>{
    return this.http.get<ActorListResponse>
    (`https://api.themoviedb.org/3/search/person?query=${query}&api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }
}
