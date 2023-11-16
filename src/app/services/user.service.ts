import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, retry, tap, throwError } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }
  user?: IUser;
  users?: IUser[];

  setToken(id: string) {
    localStorage.setItem('IsAuthToken', id);
  }
  getToken() {
    return localStorage.getItem('IsAuthToken');
  }
  delToken() {
    localStorage.removeItem('IsAuthToken');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
  login(userInfo: { username: string, password: string }): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users').pipe(
      delay(200),
      retry(2),
      tap(users => {
        this.users = users
        this.users.forEach(user => {
          if (user.username == userInfo.username && user.password == userInfo.password) {
            this.user = user;
            this.setToken(this.user.id)
          }
        })
      })
    )

  }
  /* return this.http.get<IUser[]>('http://localhost:3000/users').pipe(
    delay(200),
    retry(2),
    tap(users => {
      users.forEach(user => {
        if (user.username == userInfo.username && user.password == userInfo.password) {
          this.user = user;
          this.setToken(this.user.id)
        }
      })
    })
  ) */
  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>('http://localhost:3000/users').pipe(
      delay(200),
      retry(2),
      tap(users => this.users = users)
    )
  }
}
