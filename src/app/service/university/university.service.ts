import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { University } from '../../model/university';

@Injectable({
  providedIn: 'root'
})
export class UniversityService extends GenericService<University>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/university")
  }
}
