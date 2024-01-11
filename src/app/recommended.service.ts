import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recommended } from './recommended';

@Injectable({
  providedIn: 'root'
})
export class RecommendedService {
  constructor(private http: HttpClient) { }
  getData(token: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8888/api/recom`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(  
        userData => {
          return userData;
        }));
  }
  addData(recom: Recommended, token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8888/api/recom`, recom, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  deleteData(pid: number, token: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8888/api/recom?id=${pid}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}
