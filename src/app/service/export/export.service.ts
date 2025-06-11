import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Teacher } from '../../model/teacher';
import { Student } from '../../model/student';
import { Examination } from '../../model/examination';
import { EvaluationGrade } from '../../model/evaluation-grade';

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

  exportTeachersToXML(t : Teacher[]){
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

  exportTeachersToPDF(t : Teacher[]){
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

  exportStudentsToXML(t : Student[]){
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

  exportStudentsToPDF(t : Student[]){
    return this.http.post('http://localhost:8080/export/pdf', t, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  exportExaminationToPDF(exam: Examination) {
    return this.http.post(`http://localhost:8080/export/pdf`, exam, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  exportExaminationToXML(exam: Examination) {
    return this.http.post(`http://localhost:8080/export/xml`, exam, {
      responseType: 'text',
      observe: 'response'
    });
  }

  exportExaminationsToPDF(exams: Examination[]) {
    return this.http.post('http://localhost:8080/export/examination/pdf/list', exams, {
      responseType: 'blob',
      observe: 'response',
    });
  } 

exportExaminationsToXML(exams: Examination[]) {
  return this.http.post('http://localhost:8080/export/examination/xml/list', exams, {
      responseType: 'text',
      observe: 'response',
    });
  }

  exportGradeToXML(t : EvaluationGrade){
    return this.http.post('http://localhost:8080/export/xml', t, {
      responseType: 'text',
      observe: 'response'
    });
  }

  exportGradesToXML(t : EvaluationGrade[]){
    return this.http.post('http://localhost:8080/export/xml', t, {
      responseType: 'text',
      observe: 'response'
    });
  }


  exportGradeToPDF(t : EvaluationGrade){
    return this.http.post('http://localhost:8080/export/pdf', t, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  exportGradesToPDF(t : EvaluationGrade[]){
    return this.http.post('http://localhost:8080/export/pdf', t, {
      responseType: 'blob',
      observe: 'response'
    });
  }
}
