import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { SignupCredentials } from '../../../model/user-credentials';
import { RegisteredUser } from '../../../model/registered-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private service : AuthService, private router : Router, private toaster : ToastrService){}

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      const {username = '', email = '', password = ''} = this.signupForm.value;

      if(username === '' || email === '' || password === ''){
        alert("Signup error!");
        return;
      }

      const signupCredentials : RegisteredUser = {username : username ?? '', email : email ?? '', password : password ?? ''};
      this.service.signUp(signupCredentials)
        .subscribe({
          next: (data: RegisteredUser) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.toaster.error("Greska");
          }
        });
    }
  }
}
