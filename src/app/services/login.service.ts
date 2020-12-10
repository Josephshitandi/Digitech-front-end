import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json', "Authorization": "Token cddeb42790cb565e323b616ee4034c613dbee7fb"});
  


  constructor(private http:HttpClient) { }

  login(user): Observable<any> {
    return this.http.post('https://shitandi-digitech.herokuapp.com' + '/auth/login/', user,
    {headers: this.httpHeaders})
  }

  AddUser(user): Observable<any> {
    return this.http.post('https://shitandi-digitech.herokuapp.com' + '/auth/signup/', user,
    {headers: this.httpHeaders})
  }
}

