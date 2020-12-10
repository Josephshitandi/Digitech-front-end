import { Injectable } from '@angular/core';
import {Site} from '../models/site';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token cddeb42790cb565e323b616ee4034c613dbee7fb"});
  hood:Site


  constructor(private http:HttpClient) { }

  createSite(hood): Observable<any> {
    return this.http.post('https://shitandi-digitech.herokuapp.com' + '/api/v1/site/', hood,
    {headers: this.httpHeaders})
  }


  getSites():Observable<any>{
    interface ApiResponse{
      name:string
      location:string
      admin:number
    }
    return this.http.get<ApiResponse>('https://shitandi-digitech.herokuapp.com/api/v1/site/');
  
  }
}