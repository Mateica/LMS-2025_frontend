import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Place } from '../../model/place';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService extends GenericService<Place>{

  constructor(http : HttpClient, baseUrl : string) { 
    super(http, baseUrl+"/place");
  }
}
