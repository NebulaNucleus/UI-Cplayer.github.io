import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UserAuth } from './userAuth';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  public signup(userauth: UserAuth): Observable<any> {
    return this.httpClient.post<UserAuth>('http://localhost:8888/api/auth/register', userauth).pipe(
      map(
        userData => {
          return userData; 
        }));
  }

  setBearerToken(token: string) {
    sessionStorage.setItem('token', token);
  }
  getBearerToken() {
    return sessionStorage.getItem('token');
  }
  public login(userinfo: UserAuth): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8888/api/auth/login', userinfo).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  public deleteUser(username: string, token: string): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8888/api/auth/pro/user?username=${username}`, {
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }
  public updateUser(user: UserAuth, pass: string, token: string): Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8888/api/auth/pro/user`,{"username":`${user.username}`,"oldpass":`${user.password}`,"newpass":`${pass}`} ,{
      headers: new HttpHeaders().set("Authorization", `Bearer ${token}`)
    }).pipe(
      map(
        userData => {
          return userData;
        }));
  }

}
