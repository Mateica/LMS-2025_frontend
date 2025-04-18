import { Injectable } from '@angular/core';
import { GenericService } from './base/generic.service';
import { Account } from '../model/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends GenericService<Account>{

  constructor(http : HttpClient) {
    super(http, "accounts");
  }
}
