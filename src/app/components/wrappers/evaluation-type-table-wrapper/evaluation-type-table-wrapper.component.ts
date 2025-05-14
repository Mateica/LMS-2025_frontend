import { Component } from '@angular/core';
import { EvaluationTypeTableComponent } from '../../tables/evaluation-type-table/evaluation-type-table.component';
import { EvaluationType } from '../../../model/evaluation-type';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-type-table-wrapper',
  imports: [EvaluationTypeTableComponent],
  templateUrl: './evaluation-type-table-wrapper.component.html',
  styleUrl: './evaluation-type-table-wrapper.component.css'
})
export class EvaluationTypeTableWrapperComponent {
  evaluationTypes : EvaluationType[] = [];
  
  constructor(private service : EvaluationTypeService, private router : Router){}
  
  getAll(){
    this.service.getAll().subscribe((r) =>{
      this.evaluationTypes = r;
    });
  }
  
  updateEvaluationType(t : EvaluationType){
    this.router.navigate(["/evaluationTypeForm"]);
  }
  
  deleteEvaluationType(t : EvaluationType){
    if(t.id !== undefined){
      this.service.delete(t.id).subscribe(()=>{
        this.getAll();
    });
  }
  }
}
