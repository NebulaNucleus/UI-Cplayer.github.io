import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Favs } from './fav';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  constructor(private http: HttpClient) { }
  getData(usern: String, token: string): Observable<any> {
    return this.http.get<any>(`http://localhost:8888/api/fav?username=${usern}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  addData(fav: Favs, token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8888/api/fav`, fav, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  deleteData(usern: string, token: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:8888/api/fav?username=${usern}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  deleteDataUser(usern: string, name: string, token: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8888/api/fav/id`, { "username": `${usern}`, "name": `${name}` }, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}
