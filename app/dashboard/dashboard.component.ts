import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { RouterService } from '../router.service';
import { AuthenticationService } from '../authentication.service';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user: User = new User();



  constructor(private breakpointObserver: BreakpointObserver, private route: RouterService,
     private auth : AuthenticationService, private userser :UserService) {}
     
     isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
     .pipe(
       map(result => result.matches),
       shareReplay()
     );

  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }
    var name:string = sessionStorage.getItem('username');
    var token:string = sessionStorage.getItem('token');    
    this.userser.getdetails(name,token).subscribe(
      res => this.user=res,
      err => {
        sessionStorage.clear();
        this.route.tologin();
      }
    )
  }

  logout(){
    sessionStorage.clear();
    this.route.tologin();
  }

}
