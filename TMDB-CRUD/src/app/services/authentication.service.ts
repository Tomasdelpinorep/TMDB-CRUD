import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http :HttpClient) { }

  getRequestToken() :Observable<any>{
    return this.http.get(`${environment.baseUrl}/authentication/token/new?api_key=${environment.apiKey}`);
    //https://api.themoviedb.org/3/authentication/token/new?api_key=fba6287e1b5585e45727ead4703af755
  }

  createSession():Observable<any>{
    return this.http.post(`${environment.baseUrl}/authentication/session/new?api_key=${environment.apiKey}`, {
      request_token: sessionStorage.getItem('REQUEST_TOKEN')
    });
  }

  deleteSession(sessionId:string | null){
    return this.http.delete(`https://api.themoviedb.org/3/authentication/session?api_key=${environment.apiKey}&session_id=${sessionId}`)
  }
}