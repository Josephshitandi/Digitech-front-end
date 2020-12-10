import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor(private loginservice: LoginService,private rouuter:Router) { }

  


  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    }
  }

  onLogin() {
    this.loginservice.login(this.input).subscribe((res: Response) => {
      localStorage.setItem('accessToken', res['access'])
      this.rouuter.navigate(['home/'])
      // console.log(res['access'])
    }, error => {
      console.log('error')
    })
  }
}
