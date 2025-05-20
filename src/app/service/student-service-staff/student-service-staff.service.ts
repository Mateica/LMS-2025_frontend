import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { StudentServiceStaff } from '../../model/student-service-staff';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceStaffService extends GenericService<StudentServiceStaff> {

  constructor(http : HttpClient) {
    super(http, "/studentServiceStaff");
  }
}
