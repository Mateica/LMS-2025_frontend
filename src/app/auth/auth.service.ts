import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable, tap } from 'rxjs';
import { LoginResponse, SignupCredentials, UserCredentials } from '../model/user-credentials';
import { RegisteredUser } from '../model/registered-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUp(credentials : RegisteredUser) : Observable<RegisteredUser>{
    return this.http.post<RegisteredUser>(`${environment.baseUrl}/auth/register`, credentials);
  }

  login(credentials : UserCredentials) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${environment.baseUrl}/auth/login`, credentials)
      .pipe(tap((result) => {
        localStorage.setItem('authUser', JSON.stringify(result));
      }));
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('authUser') !== null;
  }
}
