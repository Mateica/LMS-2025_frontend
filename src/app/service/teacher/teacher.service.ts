import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Teacher } from '../../model/teacher';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeacherService extends GenericService<Teacher>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/teacher")
  }
}
