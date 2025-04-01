import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { EducationGoal } from '../../model/education-goal';

@Injectable({
  providedIn: 'root'
})
export class EducationGoalService extends GenericService<EducationGoal>{
  constructor(http : HttpClient, baseUrl: string) {
      super(http, baseUrl+"/education-goal")
   }
}
