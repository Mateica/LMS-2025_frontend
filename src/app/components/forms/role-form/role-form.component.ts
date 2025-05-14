import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RoleService } from '../../../service/role/role.service';
import { Router, RouterModule } from '@angular/router';
import { Role } from '../../../model/role';

@Component({
  selector: 'app-role-form',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './role-form.component.html',
  styleUrl: './role-form.component.css'
})
export class RoleFormComponent {
  @Input()
  role : Role | null = null;
  public roleForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
  });

  @Output()
  submitEvent = new EventEmitter<Role>();

  constructor(private service : RoleService, private router : Router){}

  onSubmit() {
    this.submitEvent.emit({...this.roleForm.value as Role});
  }

}
