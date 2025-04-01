import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { ClassTime } from '../../model/class-time';

@Injectable({
  providedIn: 'root'
})
export class ClassTimeService extends GenericService<ClassTime>{

  constructor(http : HttpClient, baseUrl: string) {
      super(http, baseUrl+"/class-time");
   }
}
