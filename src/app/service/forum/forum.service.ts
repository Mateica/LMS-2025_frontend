import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Forum } from '../../model/forum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumService extends GenericService<Forum>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl+"/forum");
  }
}
