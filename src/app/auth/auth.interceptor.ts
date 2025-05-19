import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export class AuthInterceptor implements HttpInterceptor{
  constructor(private authService : AuthService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.token !== null){
      let newRequest = req.clone({
        headers : req.headers.set("Authorization", this.authService.token)
      });

      return next.handle(newRequest);
    }

    return next.handle(req);
  }
};
