import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Topic } from '../../model/topic';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopicService extends GenericService<Topic>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/topic");
  }
}
