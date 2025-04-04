import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { SignupCredentials } from '../../../model/user-credentials';
import { RegisteredUser } from '../../../model/registered-user';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  public signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dateOfBirth : new FormControl(new Date(), [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private service : AuthService, private router : Router){}

  public onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      const {firstName = '', lastName = '', dateOfBirth, email = '', password = ''} = this.signupForm.value;

      if(firstName === '' || lastName === '' || email === '' || password === ''){
        alert("Signup error!");
        return;
      }

      const signupCredentials : SignupCredentials = {firstName : firstName ?? '', lastName : lastName ?? '', dateOfBirth : dateOfBirth ?? new Date(), email : email ?? '', password : password ?? ''};
      this.service.signUp(signupCredentials)
        .subscribe({
          next: (data: RegisteredUser) => {
            console.log(data);
            this.router.navigate(['/login']);
          },
          error: (err) => console.log(err)
        });
    }
  }
}
