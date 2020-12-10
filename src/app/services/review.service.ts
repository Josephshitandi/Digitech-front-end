import { Injectable } from '@angular/core';
import {Review} from '../models/review';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token cddeb42790cb565e323b616ee4034c613dbee7fb"});
  hood:Review


  constructor(private http:HttpClient) { }

  createReview(hood): Observable<any> {
    return this.http.post('https://shitandi-digitech.herokuapp.com' + '/api/v1/review/', hood,
    {headers: this.httpHeaders})
  }


  getReviews():Observable<any>{
    interface ApiResponse{
      name:string
      location:string
      admin:number
    }
    return this.http.get<ApiResponse>('https://shitandi-digitech.herokuapp.com/api/v1/review/');
  
  }
}