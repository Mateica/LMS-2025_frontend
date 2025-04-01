import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { Announcement } from '../../model/announcement';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService extends GenericService<Announcement>{
   constructor(http : HttpClient ,baseUrl: string) { 
      super(http, baseUrl+"/announcement");
    }
}
