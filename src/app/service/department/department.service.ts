import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Department } from '../../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends GenericService<Department>{
  constructor(http : HttpClient) {
    super(http,"/departments");
  }
}
