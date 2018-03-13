import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map, tap } from 'rxjs/operators';
import { Http } from '@angular/http';
import { CookieService } from 'ngx-cookie';

import { User } from './../models/user';

@Injectable()
export class AuthService {
  private baseURL = '/api/auth';

  loggedIn$ = new BehaviorSubject(this.isAuthed());

  constructor(
    private http: Http,
    private cookieService: CookieService
  ) { }

  login(user: User): Observable<User> {
    return this.http.post(`${this.baseURL}/login`, user)
      .pipe(
        map(response => response.json()),
        tap(() => this.loggedIn$.next(true))
      );
  }

  logout(): Observable<any> {
    return this.http.delete(`${this.baseURL}/logout`)
      .pipe(
        map(response => response.json()),
        tap(() => this.loggedIn$.next(false))
      );
  }

  register(user: User): Observable<User> {
    return this.http.post(`${this.baseURL}/register`, user)
      .pipe(
        map(response => response.json()),
        tap(() => this.loggedIn$.next(true))
      );
  }

  isAuthed(): boolean {
    const session = this.cookieService.get('session');
    const userId = this.cookieService.get('userID');
    const expiration = parseInt(this.cookieService.get('expiration'), 10);
    return session && userId && expiration && expiration > Date.now();
  }


}
