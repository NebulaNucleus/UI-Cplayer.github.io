import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { CricapiService } from '../cricapi.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  list: Array<any>;

  constructor(private route: RouterService, private newsapi: CricapiService) { }

  ngOnInit(): void {

    if (sessionStorage.getItem('token') == null || sessionStorage.getItem('username') == null) {
      this.route.tologin();
    }

    this.newsapi.newsSports().subscribe(
      res => {
        this.list=res.articles        
      },
      err => console.log(err)
    )


  }



}
