import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Favs } from './fav';

@Injectable({
  providedIn: 'root'
})

export class CricapiService {

  constructor(private http: HttpClient) {

   }

  apikey: string = "c52040a0-d14f-4176-be72-424c32dc8f50";
  searchPlayer(name: string): Observable<any> {
    return this.http.get(`https://api.cricapi.com/v1/players?apikey=${this.apikey}`, {
      params: new HttpParams().set("search", name)
    });
  }

  statsPlayer(pid: any): Observable<any> {
    return this.http.get(`https://api.cricapi.com/v1/players_info?apikey=${this.apikey}`, {
      params: new HttpParams().set("id", pid)
    })
  }
  
    matchcalendar(): Observable<any> {
    return this.http.get<any>(`https://api.cricapi.com/v1/matches?apikey=${this.apikey}`)
  }
  newsSports():Observable<any>{
    return this.http.get<any>('http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=144d87b6f02944989fc3e65deaae19a6')
  }

  pickPlayerStatsResults(response) {
    return response;
  }


}
