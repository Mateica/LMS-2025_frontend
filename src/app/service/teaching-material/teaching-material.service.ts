import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { TeachingMaterial } from '../../model/teaching-material';

@Injectable({
  providedIn: 'root'
})
export class TeachingMaterialService extends GenericService<TeachingMaterial>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/teaching-material")
  }
}
