import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, retry, tap, throwError } from 'rxjs';
import { IUser, IUserRole } from '../models/user';
import { IEvent } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) { }
  user: IUser = {
    id: "",
    username: "",
    password: "",
    email: "",
    role: IUserRole.USER
  };
  users: IUser[] = [];
  setToken(user: IUser) {
    localStorage.setItem('IsAuthToken', JSON.stringify(user));
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
  getUser(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:3000/users?id=${this.getToken()}`).pipe(
      delay(200),
      retry(2),
      tap(users => { this.user = users[0]; })
    )
  }
  login(userInfo: { username: string, password: string }): Observable<IUser[]> {
    return this.http.get<IUser[]>(`http://localhost:3000/users?username=${userInfo.username}`).pipe(
      delay(200),
      retry(2),
      tap((users) => {
        if (users[0].username == userInfo.username && users[0].password == userInfo.password) {
          this.user = users[0]
          this.setToken(this.user)
        }
      })
    )
  }
  register(userInfo: { username: string, password: string, email: string }): Observable<IUser> {
    let id: string = "id" + Math.random().toString(16).slice(2)
    this.user = {
      id: id,
      username: userInfo.username,
      password: userInfo.password,
      email: userInfo.email,
      role: IUserRole.USER
    }
    return this.http.post<IUser>(`http://localhost:3000/users`, this.user).pipe(
      delay(200),
      retry(2),
      tap((user) => {
        this.setToken(this.user)
      }))
  }
}
