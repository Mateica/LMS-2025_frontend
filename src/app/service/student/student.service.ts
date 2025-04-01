import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Student } from '../../model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends GenericService<Student>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/student");
  }
}
