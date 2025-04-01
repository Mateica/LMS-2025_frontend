import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { EvaluationInstrument } from '../../model/evaluation-instrument';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationInstrumentService extends GenericService<EvaluationInstrument>{

  constructor(http : HttpClient, baseUrl: string) {
    super(http, baseUrl+"/evaluation-instrument");
  }
}
