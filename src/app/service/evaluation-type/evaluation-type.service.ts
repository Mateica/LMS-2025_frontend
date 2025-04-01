import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { EvaluationType } from '../../model/evaluation-type';

@Injectable({
  providedIn: 'root'
})
export class EvaluationTypeService extends GenericService<EvaluationType>{

  constructor(http : HttpClient, baseUrl: string) {
    super(http, baseUrl+"/evaluation-type")
  }
}
