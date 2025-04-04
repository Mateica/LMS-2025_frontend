import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { LoginResponse, UserCredentials } from '../../../model/user-credentials';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private service : AuthService, private router : Router){}

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';

      if(email === '' || password === ''){
        alert("Login error");
        return;
      }

      const userCredentials : UserCredentials = {
        email,
        password
      };

      this.service.login(userCredentials)
      .subscribe((data: LoginResponse) => {
        if(this.service.isLoggedIn()){
          if(data.role === 'admin'){
          this.router.navigate(['/admin']);
          }
          else if(data.role === 'student'){
            this.router.navigate(['/student']);
          }else{
            this.router.navigate(['/home']);
          }
        }
        console.log(data);
      });
    }
  }
}
