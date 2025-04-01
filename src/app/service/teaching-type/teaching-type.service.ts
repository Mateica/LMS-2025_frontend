import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { TeachingType } from '../../model/teaching-type';

@Injectable({
  providedIn: 'root'
})
export class TeachingTypeService extends GenericService<TeachingType>{

  constructor(http : HttpClient, baseUrl : string) { 
    super(http, baseUrl+"/teaching-type")
  }
}
