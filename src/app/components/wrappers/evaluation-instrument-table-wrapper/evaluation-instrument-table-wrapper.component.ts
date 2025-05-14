import { Component } from '@angular/core';
import { EvaluationInstrumentTableComponent } from '../../tables/evaluation-instrument-table/evaluation-instrument-table.component';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-instrument-table-wrapper',
  imports: [EvaluationInstrumentTableComponent],
  templateUrl: './evaluation-instrument-table-wrapper.component.html',
  styleUrl: './evaluation-instrument-table-wrapper.component.css'
})
export class EvaluationInstrumentTableWrapperComponent {
    evaluationInstruments : EvaluationInstrument[] = [];
  
    constructor(private service : EvaluationInstrumentService, private router : Router){}
  
    getAll(){
      this.service.getAll().subscribe((r) =>{
        this.evaluationInstruments = r;
      })
    }
  
    updateEvaluationInstrument(t : EvaluationInstrument){
      this.router.navigate(["/evaluationInstrumentForm"]);
    }
  
    deleteEvaluationInstrument(t : EvaluationInstrument){
      if(t.id !== undefined){
         this.service.delete(t.id).subscribe(()=>{
          this.getAll();
      });
      }
    }
}
