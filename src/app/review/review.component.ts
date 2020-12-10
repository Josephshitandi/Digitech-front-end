import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Review} from '../models/review';
import {ReviewService } from '../services/review.service'
import { title } from 'process';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  hoods = [];
  http;
  error: any;
  review;


  constructor(private hoodservice:ReviewService , http:HttpClient) {
    this.http = http;
   }

   addReview() {
   
   this.hoodservice.createReview(this.review).subscribe(
    response => {
      alert('Neighborhood ' +  ' has been created')
    },
    error => console.log('error', error)
  )
  
  }


  ngOnInit(): void {
    this.review = {name:"",location:"",admin:""}
    this.hoodservice.getReviews().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let title = value['title'];
       let text = value['text'];
       let date = value['date'];
       let site = value['site'];
       let user = value['user'];
       let hoodObject = new Review(title,text,date,site,user)
       this.hoods.push(hoodObject)
      });
    });
  }
}
