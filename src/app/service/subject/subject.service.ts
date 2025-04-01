import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Subject } from '../../model/subject';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SubjectService extends GenericService<Subject>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/subject");
  }
}
