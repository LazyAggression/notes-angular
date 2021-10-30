import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/auth/signin`;
    const body = { username, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.accessToken) {
          localStorage.setItem('accessToken', resp.accessToken);
          this._user = {
            name: resp.name!,
            user_id: resp.user_id!,
            username: resp.username!,
          };
        }
      }),
      map((resp) => true),
      catchError((err) => of(false))
    );
  }

  register(username: string, password: string, name: string, email: string) {
    const url = `${this.baseUrl}/auth/signup`;
    const body = { username, password, name, email };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.accessToken) {
          localStorage.setItem('accessToken', resp.accessToken);
          this._user = {
            name: resp.name!,
            user_id: resp.user_id!,
            username: resp.username!,
          };
        }
      }),
      map((resp) => true),
      catchError((err) => of(false))
    );
  }

  validateToken() {
    const url = `${this.baseUrl}/auth/validate`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    });
    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        localStorage.setItem('accessToken', resp.accessToken!);
        this._user = {
          name: resp.name!,
          user_id: resp.user_id!,
          username: resp.username!,
        };
        return true;
      }),
      catchError((err) => of(false))
    );
  }

  logout() {
    localStorage.clear();
  }
}
