import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { StudentAffairsOffice } from '../../model/student-affairs-office';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentOfficeService extends GenericService<StudentAffairsOffice> {

  constructor(http : HttpClient) {
    super(http, "/studentAffairsOffices");
  }
}
