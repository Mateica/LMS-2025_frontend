import { Component } from '@angular/core';
import { RoleTableComponent } from '../../tables/role-table/role-table.component';
import { Role } from '../../../model/role';
import { RoleService } from '../../../service/role/role.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-table-wrapper',
  imports: [RoleTableComponent],
  templateUrl: './role-table-wrapper.component.html',
  styleUrl: './role-table-wrapper.component.css'
})
export class RoleTableWrapperComponent {
  roles : Role[] = [];

  constructor(private service : RoleService, private router : Router){}

  getAll(){
    this.service.getAll().subscribe((r) =>{
      this.roles = r;
    })
  }

  updateRole(t : Role){
    this.router.navigate(["/roleForm"]);
  }

  deleteRole(t : Role){
    this.service.delete(t.id).subscribe(()=>{
      this.getAll();
    });
  }
}
