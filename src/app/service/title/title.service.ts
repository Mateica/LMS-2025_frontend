import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Title } from '../../model/title';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TitleService extends GenericService<Title>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/title")
  }
}
