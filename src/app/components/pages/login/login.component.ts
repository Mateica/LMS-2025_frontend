import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { LoginResponse, UserCredentials } from '../../../model/user-credentials';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role/role.service';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterModule, MatFormFieldModule,MatInputModule,MatSelectModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    roles: new FormControl('', [Validators.required])
  });

  public roles: Role[] = [];

  constructor(
    private service: AuthService,
    private roleService: RoleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.roleService.getAll().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error: () => {
        alert('Failed to load roles.');
      }
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      alert('Please fill all required fields correctly.');
      return;
    }

    const email = this.loginForm.value.email ?? '';
    const password = this.loginForm.value.password ?? '';
    const selectedRoles = this.loginForm.value.roles ?? '';

    if (!email || !password) {
      alert('Email and password cannot be empty.');
      return;
    }

    const userCredentials: UserCredentials = {
      email,
      password
    };

    this.service.login(userCredentials).subscribe({
      next: (data: LoginResponse) => {
        console.log('Login success:', data);
          localStorage.setItem('authUser', JSON.stringify(data));

        if (this.service.isLoggedIn()) {

          if(!data.roles.includes(selectedRoles)) {
            alert("You don't have permission to access the site page!");
            return;
          }
          
          if (data.roles.includes('ADMIN')) {
            this.router.navigate(['admin']);
          } else if (data.roles.includes('STUDENT')) {
            this.router.navigate(['student']);
          } else if (data.roles.includes('STAFF')) {
            this.router.navigate(['studentServicePage']);
          } else if (data.roles.includes('TEACHER')) {
            this.router.navigate(['teacherPage']);
          } else {
            this.router.navigate(['home']);
          }
        } else {
          alert('Login failed. Please try again.');
        }
      },
      error: (err) => {
        alert('Login failed. Please check your credentials.');
        console.error('Login error:', err);
      }
    });
  }
}
