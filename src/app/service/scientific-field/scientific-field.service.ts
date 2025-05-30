import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { ScientificField } from '../../model/scientific-field';

@Injectable({
  providedIn: 'root'
})
export class ScientificFieldService extends GenericService<ScientificField>{

  constructor(http : HttpClient) { 
    super(http, "/scientificFields");
  }
}
