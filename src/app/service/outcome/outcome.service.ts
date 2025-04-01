import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Outcome } from '../../model/outcome';

@Injectable({
  providedIn: 'root'
})
export class OutcomeService extends GenericService<Outcome> {

  constructor(http : HttpClient ,baseUrl: string) { 
    super(http, baseUrl+"/outcome");
  }
}
