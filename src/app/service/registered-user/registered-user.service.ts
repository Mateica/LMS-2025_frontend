import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { RegisteredUser } from '../../model/registered-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisteredUserService extends GenericService<RegisteredUser>{
  constructor(http : HttpClient,baseUrl: string) { 
    super(http, baseUrl+"/registered-user");
  }
}
