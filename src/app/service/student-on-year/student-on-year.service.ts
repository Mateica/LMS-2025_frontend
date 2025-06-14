import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { StudentOnYear } from '../../model/student-on-year';
import { HttpClient } from '@angular/common/http';
import { Examination } from '../../model/examination';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class StudentOnYearService extends GenericService<StudentOnYear>{
  constructor(http : HttpClient) { 
    super(http,"/studentsOnYear");
  }

  registerExam(e : Examination, id : number){
    return this.http.post(`${environment.baseUrl}/studentsOnYear/${id}/register-exam`,e);
  }
}
