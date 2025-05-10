import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { ClassTerm } from '../../model/class-term';

@Injectable({
  providedIn: 'root'
})
export class ClassTermService extends GenericService<ClassTerm>{

  constructor(http : HttpClient) {
      super(http,"/class-terms");
   }
}
