import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { TeacherOnRealization } from '../../model/teacher-on-realization';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherOnRealizationService extends GenericService<TeacherOnRealization>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/teacher-on-realization")
  }
}
