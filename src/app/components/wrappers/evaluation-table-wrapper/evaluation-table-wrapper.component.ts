import { Component, OnInit } from '@angular/core';
import { EvaluationTableComponent } from '../../tables/evaluation-table/evaluation-table.component';
import { Evaluation } from '../../../model/evaluation';
import { MatTableDataSource } from '@angular/material/table';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { Router } from '@angular/router';
import { ExportService } from '../../../service/export/export.service';

@Component({
  selector: 'app-evaluation-table-wrapper',
  imports: [EvaluationTableComponent],
  templateUrl: './evaluation-table-wrapper.component.html',
  styleUrl: './evaluation-table-wrapper.component.css'
})
export class EvaluationTableWrapperComponent implements OnInit {
  evaluations!: MatTableDataSource<Evaluation>; 
  evaluation : Evaluation | null = null;

  constructor(private service : EvaluationService, private exportService : ExportService, private router : Router){}

  ngOnInit(): void {
    this.getAllActive();
  }

  getAll(){
    this.service.getAll().subscribe((r)=>{
      this.evaluations = new MatTableDataSource(r);
    });
  }

  getAllActive(){
    this.service.getAllActive().subscribe((r)=>{
      this.evaluations = new MatTableDataSource(r);
    });
  }

  createEvaluation(t : Evaluation){
    if(t.id !== undefined){
      this.service.update(Number(t.id), t).subscribe(() => this.getAllActive());
    }else{
      this.service.create(t).subscribe(() => this.getAllActive());
    }
  }

  setEvaluation(t : Evaluation){
    this.evaluation = t;
  }

  deleteEvaluation(t : Evaluation){
    this.service.softDelete(Number(t.id)).subscribe(()=> this.service.getAllActive());
  }

  exportEvaluationToPDF(t : Evaluation){
    
  }

  exportEvaluationToXML(t : Evaluation){

  }
}
