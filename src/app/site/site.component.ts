import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Site} from '../models/site'
import {SiteService } from '../services/site.service'

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  sites = [];
  http;
  error: any;
  hood;


  constructor(private hoodservice:SiteService , http:HttpClient) {
    this.http = http;
   }

   addSite() {
   
   this.hoodservice.createSite(this.hood).subscribe(
    response => {
      alert('Site ' +  ' has been created')
    },
    error => console.log('error', error)
  )
  
  }


  ngOnInit(): void {
    this.hood = {name:"",location:"",admin:""}
    this.hoodservice.getSites().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let name = value['name'];
       let location = value['location'];
       let admin = value['admin'];
       let email = value['email'];
       let image = value['image'];
       let description = value['description'];
       let hoodObject = new Site(name,email,location,admin,description,image)
       this.sites.push(hoodObject)
      });
    });
  }
}
