import { Component } from '@angular/core';
import { EvaluationInstrumentFormComponent } from '../../forms/evaluation-instrument-form/evaluation-instrument-form.component';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation-instrument-form-wrapper',
  imports: [EvaluationInstrumentFormComponent],
  templateUrl: './evaluation-instrument-form-wrapper.component.html',
  styleUrl: './evaluation-instrument-form-wrapper.component.css'
})
export class EvaluationInstrumentFormWrapperComponent {
    evaluationInstrument : EvaluationInstrument | null = null;
    evaluationInstruments : EvaluationInstrument[] = [];
    
    constructor(private service : EvaluationInstrumentService, private router : Router){}
  
    getAll(){
      this.service.getAll().subscribe((r : EvaluationInstrument[])=>{
        this.evaluationInstruments = r;
      });
    }
  
     createEvaluationInstrument(t : EvaluationInstrument){
      if(t.id !== undefined){
        this.service.update(t.id, t).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      }else{
        this.service.create(t).subscribe(()=>{
          this.getAll();
          this.router.navigate(["/"]);
        });
      }
    }
  
    setEvaluationInstrument(t : EvaluationInstrument){
      this.evaluationInstrument = t;
    }

}
