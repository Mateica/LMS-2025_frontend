import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Message } from '../../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends GenericService<Message>{

  constructor(http : HttpClient, baseUrl : string) { 
    super(http, baseUrl+"/message");
  }
}
