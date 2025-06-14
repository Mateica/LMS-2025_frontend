import { Component, Input, OnInit } from '@angular/core';
import { EvaluationGradeFormComponent } from '../../forms/evaluation-grade-form/evaluation-grade-form.component';
import { EvaluationGrade } from '../../../model/evaluation-grade';
import { Router } from '@angular/router';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { Teacher } from '../../../model/teacher';
import { Evaluation } from '../../../model/evaluation';

@Component({
  selector: 'app-evaluation-grade-form-wrapper',
  standalone : true,
  imports: [EvaluationGradeFormComponent],
  templateUrl: './evaluation-grade-form-wrapper.component.html',
  styleUrl: './evaluation-grade-form-wrapper.component.css'
})
export class EvaluationGradeFormWrapperComponent implements OnInit {
  @Input()
  grade : EvaluationGrade | null = null;

  grades : EvaluationGrade[] = [];
  teachers : Teacher[] = [];
  evaluations : Evaluation[] = [];

  constructor(private service : EvaluationGradeService,
              private evaluationService : EvaluationService,
              private teacherService : TeacherService,
              private router : Router){}
              
  ngOnInit(): void {
    this.evaluationService.getAllActive().subscribe((r) => {
        this.evaluations = r;
        console.log(this.evaluations);
        
    });

    this.teacherService.getAllActive().subscribe((r)=> {
      this.teachers = r;
      console.log(this.teachers);
      
    });
    this.getAllActive();
  }

  getAll(){
    this.service.getAll().subscribe((r)=> {
      this.grades = r;
      console.log(this.grades);
    });
  }

  getAllActive(){
    this.service.getAllActive().subscribe((r)=> this.grades = r);
  }

  getById(id : number){
    this.service.getById(Number(id)).subscribe(()=> this.getAllActive());
  }

  createGrade(t : EvaluationGrade){
    if(t.id !== undefined){
      console.log(t);
      this.service.update(Number(t.id), t).subscribe(() => this.service.getAllActive());
    }else{
      console.log(t);
      this.service.create(t).subscribe(() => this.service.getAllActive());
    }
  }

  setGrade(t : EvaluationGrade){
    this.grade = t;
  }

  deleteGrade(t : EvaluationGrade){
    this.service.softDelete(Number(t.id)).subscribe(()=> this.service.getAllActive());
  }

}
