import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { SubjectAttendance } from '../../model/subject-attendance';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectAttendanceService extends GenericService<SubjectAttendance> {

  constructor(http : HttpClient) {
    super(http, "/subject-attendances")
  }
}
