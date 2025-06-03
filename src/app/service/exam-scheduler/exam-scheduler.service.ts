import { Injectable } from '@angular/core';

import { GenericService } from '../base/generic.service';
import { Evaluation } from '../../model/evaluation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamSchedulerService extends GenericService<Evaluation> {
   constructor(http: HttpClient) {
    super(http, '/evaluations'); 
  }
}
