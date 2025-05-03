import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisteredUser } from '../../../model/registered-user';
import { RegisteredUserService } from '../../../service/registered-user/registered-user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from '../../../service/role/role.service';
import { Role } from '../../../model/role';

@Component({
  selector: 'app-registered-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './registered-user-form.component.html',
  styleUrl: './registered-user-form.component.css'
})
export class RegisteredUserFormComponent implements OnInit {
  @Input()
  user : RegisteredUser | null = null;

  roles : Role[] = [];

  @Output()
  submitEvent = new EventEmitter<RegisteredUser>();

  userForm  = new FormGroup({
    username : new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    roles : new FormControl([])
  });

  constructor(private service : RegisteredUserService, private roleService : RoleService, private router : Router, private toaster : ToastrService){}

  ngOnInit(): void {
    this.roleService.getAll().subscribe(r=>{
      this.roles = r;
    });
  }

  onSubmit(){
    if(this.userForm.valid){
      this.submitEvent.emit({...this.userForm.value }  as RegisteredUser);
    }
  }
}
