import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { SubjectRealization } from '../../model/subject-realization';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectRealizationService extends GenericService<SubjectRealization>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/subject-realization")
  }
}
