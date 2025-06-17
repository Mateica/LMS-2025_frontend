import { Injectable } from '@angular/core';
import { GenericService } from '../base/generic.service';
import { File } from '../../model/file';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class FileService extends GenericService<File>{
  constructor(http : HttpClient) { 
    super(http, "/files")
  }

  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${environment.baseUrl}/files/download/${id}`, { responseType: 'blob' });
  }

  // TODO: Prepraviti zahtev da ne koristi formData vec da prati parametre sa bekend zahteva za upload
  uploadFile(file: FormData): Observable<any> {
    return this.http.post('/api/files/upload', file)
  }
}
