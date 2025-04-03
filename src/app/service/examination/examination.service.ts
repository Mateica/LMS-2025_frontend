import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Examination } from '../../model/examination';

@Injectable({
  providedIn: 'root'
})
export class ExaminationService extends GenericService<Examination>{
  constructor(http : HttpClient) {
    super(http,"/examinations")
  }
}
