import { Component, OnInit } from '@angular/core';
import { RecommendedService } from '../recommended.service';
import { RouterService } from '../router.service';

@Component({
  selector: 'app-recom',
  templateUrl: './recom.component.html',
  styleUrls: ['./recom.component.css']
})
export class RecomComponent implements OnInit {
  list: Array<any>;
  constructor(private recomser: RecommendedService, private route: RouterService) { }
  ngOnInit(): void {
    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }
    this.recomser.getData(sessionStorage.getItem('token')).subscribe(
      res => this.list = res
    )
  }

}
