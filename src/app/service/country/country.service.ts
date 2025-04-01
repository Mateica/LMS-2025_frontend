import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Country } from '../../model/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends GenericService<Country>{
  constructor(http : HttpClient) { 
    super(http, "/country");
  }
}
