import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SignupComponent } from '../app/signup/signup.component';
import {SiteComponent } from '../app/site/site.component';
import {ReviewComponent } from '../app/review/review.component';
import {HomeComponent } from '../app/home/home.component';
import {LoginComponent } from '../app/login/login.component';
import {AboutComponent } from '../app/about/about.component'


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'site', component: SiteComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
