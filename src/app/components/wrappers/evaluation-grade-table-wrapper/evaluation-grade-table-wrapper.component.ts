import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationGrade } from '../../../model/evaluation-grade';
import { Role } from '../../../model/role';
import { ExportService } from '../../../service/export/export.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { EvaluationGradeTableComponent } from '../../tables/evaluation-grade-table/evaluation-grade-table.component';

@Component({
  selector: 'app-evaluation-grade-table-wrapper',
  imports: [EvaluationGradeTableComponent],
  templateUrl: './evaluation-grade-table-wrapper.component.html',
  styleUrl: './evaluation-grade-table-wrapper.component.css'
})
export class EvaluationGradeTableWrapperComponent {
  grades!: MatTableDataSource<EvaluationGrade>; 
  grade : EvaluationGrade | null = null;

  role : Role | null = null;

  constructor(private gradeService : EvaluationGradeService, private exportService : ExportService, private toaster : ToastrService, private router : Router){}

  ngOnInit(): void {
    this.gradeService.getAllActive().subscribe((r : EvaluationGrade[]) =>{
      this.grades = new MatTableDataSource(r);
    });
    
  }

  getAll(){
    this.gradeService.getAll().subscribe(r=>{
      this.grades.data = r;
    });
  }

  getAllActive(){
    this.gradeService.getAllActive().subscribe(r=>{
      this.grades.data = r;
    });
  }

  createGrade(t : EvaluationGrade){
    if(t.id !== null){
        this.gradeService.update(Number(t.id), t).subscribe(()=>{
        this.getAllActive();
      });
    }else{
      this.gradeService.create(t).subscribe(()=>{
        this.getAllActive();
      });
    }
  }

  setGrade(t : EvaluationGrade){
    this.grade = t;
  }

  deleteGrade(t : EvaluationGrade){
    this.gradeService.softDelete(Number(t.id)).subscribe(()=> this.getAllActive());
  }

  exportGradeToPDF(grade: EvaluationGrade) {
      this.exportService.exportGradeToPDF(grade).subscribe({
        next: (response) => {
          const blob = new Blob([response.body!], { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `grade_${Number(grade.id)}.pdf`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          console.error('PDF export error:', err);
        }
      });
    }
  
    exportGradeToXML(grade: EvaluationGrade) {
      this.exportService.exportGradeToXML(grade).subscribe({
        next: (response) => {
          const blob = new Blob([response.body!], { type: 'application/xml' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `grade_${Number(grade.id)}.xml`;
          a.click();
          window.URL.revokeObjectURL(url);
        },
        error: (err) => {
          console.error('XML export error:', err);
        }
      });
    }
}
