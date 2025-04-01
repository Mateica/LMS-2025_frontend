import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { YearOfStudy } from '../../model/year-of-study';

@Injectable({
  providedIn: 'root'
})
export class YearOfStudyService extends GenericService<YearOfStudy> {

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/year-of-study")
  }
}
