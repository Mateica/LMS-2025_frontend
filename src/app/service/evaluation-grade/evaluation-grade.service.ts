import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { EvaluationGrade } from '../../model/evaluation-grade';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvaluationGradeService extends GenericService<EvaluationGrade>{
  constructor(http : HttpClient) { 
    super(http,"/evaluationGrades");
  } 
}
