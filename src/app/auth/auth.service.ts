import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Observable, tap } from 'rxjs';
import { LoginResponse, UserCredentials } from '../model/user-credentials';
import { RegisteredUser } from '../model/registered-user';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user : RegisteredUser | null = null;
  token : string | null = null;
  currentUserRoles: string[] = [];
  currentlyLoggedInRole: string;

  constructor(private http : HttpClient) { }

  signUp(credentials : RegisteredUser) : Observable<RegisteredUser>{
    return this.http.post<RegisteredUser>(`${environment.baseUrl}/auth/register`, credentials);
  }

  login(credentials: UserCredentials, selectedRole: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.baseUrl}/auth/login`, credentials)
      .pipe(tap(result => {
        if (result && result.jwtToken) {
          this.token = result.jwtToken;
          this.user = JSON.parse(atob(this.token.split(".")[1]));
          if (result.roles) {
            this.currentUserRoles = result.roles;
            this.currentlyLoggedInRole = selectedRole;
          }
          localStorage.setItem('authUser', JSON.stringify(result));
        } else {
          console.error("No token in login response");
        }
      }));
  }

  logout() {
    this.user = null;
    this.token = null;
    localStorage.clear();
  }

  isLoggedIn() {
    const authData = localStorage.getItem('authUser');
    if (!authData) return false;

    const token = JSON.parse(authData).jwtToken;
    const payload = JSON.parse(atob(token.split('.')[1]));
    const now = Math.floor(Date.now() / 1000);

    return payload.exp > now;
    }

    validateRoles(roles : Role[]){
      if(this.user){
        let userRoles = new Set(this.user.roles);

        for(let r of roles){
          if(userRoles.has(r)){
            return true;
          }
        }
      }

      return false;
    }
}
