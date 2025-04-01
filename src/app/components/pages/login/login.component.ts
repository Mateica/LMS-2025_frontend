import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

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
      this.service.login(this.loginForm.value)
      .subscribe((data: any) => {
        if(this.service.isLoggedIn()){
          this.router.navigate(['/admin']);
        }
        console.log(data);
      });
    }
  }
}
