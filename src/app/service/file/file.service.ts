import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { File } from '../../model/file';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService extends GenericService<File>{

  constructor(http : HttpClient) { 
    super(http, "/files")
  }
}
