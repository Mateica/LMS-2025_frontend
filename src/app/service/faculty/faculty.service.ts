import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Faculty } from '../../model/faculty';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService extends GenericService<Faculty>{

  constructor(http : HttpClient) { 
    super(http, "/faculties")
  }
}
