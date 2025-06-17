import { Component, Input, OnInit } from '@angular/core';
import { ExamTableComponent } from '../../tables/exam-table/exam-table.component';
import { ExaminationService } from '../../../service/examination/examination.service';
import { Router } from '@angular/router';
import { Examination } from '../../../model/examination';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from '../../../model/student';
import { StudentOnYear } from '../../../model/student-on-year';
import { StudentOnYearService } from '../../../service/student-on-year/student-on-year.service';
import { StudentService } from '../../../service/student/student.service';
import { ExportService } from '../../../service/export/export.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-exam-table-wrapper',
  imports: [ExamTableComponent],
  templateUrl: './exam-table-wrapper.component.html',
  styleUrl: './exam-table-wrapper.component.css'
})
export class ExamTableWrapperComponent implements OnInit {
  exams!: MatTableDataSource<Examination>; 
  exam : Examination | null = null;

  students! : MatTableDataSource<Student>;
  studentOnYears! : MatTableDataSource<StudentOnYear>;

  student : Student | null = null;

  registeredExams = new MatTableDataSource<Examination>(this.student?.studentsOnYear[0].examinations);

  constructor(private examService : ExaminationService, private studentService : StudentService, private studentOnYearService : StudentOnYearService, private exportService : ExportService, private toaster : ToastrService, private router : Router){}

  ngOnInit(): void {
    this.examService.getAllActive().subscribe((r : Examination[]) =>{
      this.exams = new MatTableDataSource(r);
    });

    this.studentService.getAllActive().subscribe((r : Student[]) =>{
      this.students = new MatTableDataSource(r);
    });

    this.studentOnYearService.getAllActive().subscribe((r : StudentOnYear[])=>{
      this.studentOnYears = new MatTableDataSource(r);
    })
  }

  getAll(){
    this.examService.getAll().subscribe(r=>{
      this.exams.data = r;
    });
  }

  getAllActive(){
    this.examService.getAllActive().subscribe(r=>{
      this.exams.data = r;
    });
  }

  createExam(t : Examination){
    if(t.id !== null){
        this.examService.update(Number(t.id), t).subscribe(()=>{
        this.getAllActive();
      });
    }else{
      this.examService.create(t).subscribe(()=>{
        this.getAllActive();
      });
    }
  }

  setExam(t : Examination){
    this.exam = t;
  }

  deleteExam(t : Examination){
    this.examService.softDelete(Number(t.id)).subscribe(()=> this.getAllActive());
  }

  registerExams(e: Examination) {
    console.table(e);
    const studentOnYear = e.studentOnYear;
    console.log(studentOnYear);
    if (!studentOnYear) {
      return;
    }

    if (!studentOnYear.examinations) {
      studentOnYear.examinations = [];
    }

    // Provera duplikata - student ne moze vise put prijaviti ispit u jednom roku
    const registeredExam = studentOnYear.examinations.some(existing => existing.id === e.id);
    if (registeredExam) {
      this.toaster.error("You have already registered this exam for this exam period!");
      return
    }
    this.studentOnYearService.registerExam(e, studentOnYear.id).subscribe(() => this.toaster.success("You have successfully registered an exam!"));
  }

exportToPdf(exam: Examination) {
    this.exportService.exportExaminationToPDF(exam).subscribe({
      next: (response) => {
        const blob = new Blob([response.body!], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `examination_${Number(exam.id)}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('PDF export error:', err);
      }
    });
  }

  exportToXml(exam: Examination) {
    this.exportService.exportExaminationToXML(exam).subscribe({
      next: (response) => {
        const blob = new Blob([response.body!], { type: 'application/xml' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `examination_${Number(exam.id)}.xml`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (err) => {
        console.error('XML export error:', err);
      }
    });
  }

}
