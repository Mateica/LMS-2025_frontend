import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { StudyProgramme } from '../../model/study-programme';

@Injectable({
  providedIn: 'root'
})
export class StudyProgrammeService extends GenericService<StudyProgramme>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/study-programme");
  }
}
