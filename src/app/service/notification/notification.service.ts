import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends GenericService<Notification>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/notification");
  }
}
