import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { StudentOnYear } from '../../model/student-on-year';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentOnYearService extends GenericService<StudentOnYear>{

  constructor(http : HttpClient, baseUrl : string) { 
    super(http, baseUrl+"/student-on-year");
  }
}
