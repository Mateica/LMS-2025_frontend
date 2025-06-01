import { Component } from '@angular/core';
import { ExamTableComponent } from '../../tables/exam-table/exam-table.component';
import { ExaminationService } from '../../../service/examination/examination.service';
import { Router } from '@angular/router';
import { Examination } from '../../../model/examination';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exam-table-wrapper',
  imports: [ExamTableComponent],
  templateUrl: './exam-table-wrapper.component.html',
  styleUrl: './exam-table-wrapper.component.css'
})
export class ExamTableWrapperComponent {
  exams!: MatTableDataSource<Examination>; 
  exam : Examination | null = null;

  constructor(private examService : ExaminationService, private router : Router){}

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

}
