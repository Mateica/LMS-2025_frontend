import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { TitleType } from '../../model/title-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleTypeService extends GenericService<TitleType>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/title-type")
  }
}
