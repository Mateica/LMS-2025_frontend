import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { LoginResponse, UserCredentials } from '../../../model/user-credentials';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role/role.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    roles : new FormControl([],[Validators.required])
  })

  roles : Role[] = [];

  constructor(private service : AuthService, private roleService : RoleService, private router : Router){}

  ngOnInit(): void {
    this.roleService.getAll().subscribe(r =>{
      this.roles = r;
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      const email = this.loginForm.value.email ?? '';
      const password = this.loginForm.value.password ?? '';
      const roles = this.loginForm.value.roles ?? '';

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
        this.router.navigate(["home"]);
         if(this.service.isLoggedIn()){
           if(data.roles.includes("ADMIN")){
            this.router.navigate(['admin']);
         }
        else if(data.roles.includes("STUDENT")){
          this.router.navigate(['student']);
        }
        else if(data.roles.includes("STAFF")){
          this.router.navigate(['studentServicePage']);
        }
        else if(data.roles.includes("TEACHER")){
          this.router.navigate(['teacherPage'])
        }
        else{
        this.router.navigate(['home']);
          }
        }
        console.log(data);
      });
    }
  }
}
