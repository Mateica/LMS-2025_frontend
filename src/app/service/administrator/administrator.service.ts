import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Administrator } from '../../model/administrator';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService extends GenericService<Administrator>{

  constructor(http : HttpClient, baseUrl: string) { 
    super(http, baseUrl+"/admin");
  }
}
