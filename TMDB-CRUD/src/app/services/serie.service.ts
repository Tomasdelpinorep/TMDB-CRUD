import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SerieListResponse } from '../models/models/serie-list.interface';
import { SerieDetailsResponse } from '../models/models/serie-details.interface';


@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private httpClient: HttpClient) { }

  getTopRatedSeries(): Observable<SerieListResponse>{
    return this.httpClient.get<SerieListResponse>
    ('https://api.themoviedb.org/3/tv/top_rated?api_key=fba6287e1b5585e45727ead4703af755');
  }

  getSeriesOnAir(): Observable<SerieListResponse>{
    return this.httpClient.get<SerieListResponse>
    ('https://api.themoviedb.org/3/tv/on_the_air?api_key=fba6287e1b5585e45727ead4703af755');
  }

  getSerieById(id: number): Observable<SerieDetailsResponse>{
    return this.httpClient.get<SerieDetailsResponse>
    (`https://api.themoviedb.org/3/tv/${id}?api_key=fba6287e1b5585e45727ead4703af755`);
  }

  getSerieListWithQuery(query :string): Observable <SerieListResponse>{
    return this.httpClient.get<SerieListResponse>
    (`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }
}
