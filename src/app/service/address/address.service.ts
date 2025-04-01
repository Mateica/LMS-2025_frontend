import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Address } from '../../model/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends GenericService<Address>{

  constructor(http : HttpClient, baseUrl: string) { 
    super(http, baseUrl+"/address");
  }
}
