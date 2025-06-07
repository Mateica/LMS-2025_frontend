import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  const authService = inject(AuthService);

  let token = authService.token;
  console.log(token);

  if (!token) {
    const authData = localStorage.getItem('authUser');
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        token = parsed.token || parsed.jwtToken; 
        authService.token = token; 
      } catch (e) {
        console.error('Error parsing authUser from localStorage', e);
      }
    }
  }

  if (token) {
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(cloned);
  }

  return next(req);
};