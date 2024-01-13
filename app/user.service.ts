import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { RouterService } from './router.service';
import { User } from './user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  public signup(user: User) {
    return this.httpClient.post<User>("http://localhost:8888/api/user", user)
  }
  public getdetails(username: string, token: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8888/api/user/pro/token?username=${username}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map( 
        userData => {
          return userData;
        }));
  }
  public modifyUser(user: User, token: string): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8888/api/user/pro/token?username=${user.username}`, user, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

  public deleteUser(username: string, token: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8888/api/user/pro/token?username=${username}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}