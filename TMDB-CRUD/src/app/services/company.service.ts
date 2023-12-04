import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyDetailsResponse } from '../models/models/company-details.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  getCompanyById(companyId: number): Observable<CompanyDetailsResponse>{
    return this.http.get<CompanyDetailsResponse>
    (`https://api.themoviedb.org/3/company/${companyId}?api_key=02bd87fa25457bdbc212118905ab3ec0`);
  }

}
