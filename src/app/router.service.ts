import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private router: Router, private location: Location) { }
  tologin(){
    this.router.navigate(["/login"])
  }
  tosignup(){
    this.router.navigate(["/signup"])
  }
  todashboard(){
    this.router.navigate(["/dashboard"])
  }
  tocontact(){
    this.router.navigate(["/contact"])
  }
  tofav(){
    this.router.navigate(["/dashboard/favs"])
  }

  tohelp(){
    this.router.navigate(["/dashboard/help"])
  }
  tostatOpener(pid){
    this.router.navigate(['dashboard',{
      outlets:{
        statOpener:['statOpener',pid,'view']
      }
    }])
  }
  back(){
    this.location.back();
  }
}
