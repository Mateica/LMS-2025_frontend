import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../../model/teacher';
import { Student } from '../../model/student';

@Injectable({
  providedIn: 'root'
})
export class ExportService {
  constructor(private http: HttpClient) { }

  exportTeacherToXML(t : Teacher){
    return this.http.post('http://localhost:8080/export/xml', t, {
      responseType: 'text',
      observe: 'response'
    });
  }

  exportTeacherToPDF(t : Teacher){
    return this.http.post('http://localhost:8080/export/pdf', t, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  exportStudentToXML(t : Student){
    return this.http.post('http://localhost:8080/export/xml', t, {
      responseType: 'text',
      observe: 'response'
    });
  }

  exportStudentToPDF(t : Student){
    return this.http.post('http://localhost:8080/export/pdf', t, {
      responseType: 'blob',
      observe: 'response'
    });
  }
}
