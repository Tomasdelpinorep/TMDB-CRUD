import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListDetailsResponse } from '../models/models/list-details';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(private http: HttpClient) { }

  getListDetails(listId: number): Observable<ListDetailsResponse> {
    return this.http.get<ListDetailsResponse>(`${environment.baseUrl}/list/${listId}?api_key=${environment.apiKey}`);
  }

  deleteList(listId: number, sessionId: string) {
    return this.http.delete(`${environment.baseUrl}/list/${listId}?api_key=${environment.apiKey}`, {
      params: {
        sessionId: sessionId
      }
    });
  }


  clearList(listId: number, sessionId: string): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/list/${listId}/clear?api_key=${environment.apiKey}&session_id=${sessionId}&confirm=true`,{

    });
  }

}
