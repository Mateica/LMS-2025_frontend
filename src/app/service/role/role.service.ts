import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Role } from '../../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends GenericService<Role>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/role")
   }
}
