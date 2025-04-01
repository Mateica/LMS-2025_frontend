import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { ForumUser } from '../../model/forum-user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForumUserService extends GenericService<ForumUser>{

  constructor(http : HttpClient, baseUrl : string) {
    super(http, baseUrl + "/forum-user");
  }
}
