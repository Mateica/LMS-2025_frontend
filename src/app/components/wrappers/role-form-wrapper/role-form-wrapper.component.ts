import { Component } from '@angular/core';
import { RoleFormComponent } from '../../forms/role-form/role-form.component';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-form-wrapper',
  imports: [RoleFormComponent],
  templateUrl: './role-form-wrapper.component.html',
  styleUrl: './role-form-wrapper.component.css'
})
export class RoleFormWrapperComponent {
  role : Role | null = null;
  roles : Role[] = [];
  
  constructor(private service : RoleService, private router : Router){}

  getAll(){
    this.service.getAll().subscribe((r : Role[])=>{
      this.roles = r;
    });
  }

   createRole(t : Role){
    if(t.id === undefined){
      this.service.update(t.id, t).subscribe(()=>{
        this.getAll();
        this.router.navigate(["/"]);
      });
    }else{
      this.service.create(t).subscribe(()=>{
        this.getAll();
        this.router.navigate(["/"]);
      });
    }
  }

  setRole(t : Role){
    this.role = t;
  }
}
