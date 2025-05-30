import { Component, OnInit } from '@angular/core';
import { TeacherTableComponent } from '../../tables/teacher-table/teacher-table.component';
import { Teacher } from '../../../model/teacher';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { ExportService } from '../../../service/export/export.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-table-wrapper',
  imports: [TeacherTableComponent],
  templateUrl: './teacher-table-wrapper.component.html',
  styleUrl: './teacher-table-wrapper.component.css'
})
export class TeacherTableWrapperComponent implements OnInit {
  teachers : Teacher[] = [];
  teacher : Teacher | null = null;

  constructor(private teacherService : TeacherService, private exportService : ExportService, private router : Router){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.teacherService.getAll().subscribe(r=>{
      this.teachers = r;
    })
  }

  updateTeacher(t : Teacher){
    this.teacher = t;
    this
  }

  deleteTeacher(t : Teacher){
    if(t.id){
        this.teacherService.softDelete(t.id).subscribe(()=>{
        this.getAll();
      });
    }
  }

 downloadXml(t: Teacher) {
  this.exportService.exportTeacherToXML(t).subscribe(response => {
    if (response.body) {
        const blob = new Blob([response.body], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${t.firstName} - ${t.lastName}.xml`;
        a.click();
        window.URL.revokeObjectURL(url);
    } else {
      console.error('XML export failed: response body is null');
    }
  });
}

downloadAllXml(t: Teacher[]) {
  this.exportService.exportTeachersToXML(t).subscribe(response => {
    if (response.body) {
        const blob = new Blob([response.body], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `teachers.xml`;
        a.click();
        window.URL.revokeObjectURL(url);
    } else {
      console.error('XML export failed: response body is null');
    }
  });
}

downloadPdf(t: Teacher) {
  this.exportService.exportTeacherToPDF(t).subscribe(response => {
      if (response.body) {
        const blob = new Blob([response.body], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${t.firstName} - ${t.lastName}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('PDF export failed: response body is null');
      }
    });
  }

downloadAllPdf(t: Teacher[]) {
  this.exportService.exportTeachersToPDF(t).subscribe(response => {
      if (response.body) {
        const blob = new Blob([response.body], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `teachers.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('PDF export failed: response body is null');
      }
    });
  }
}
