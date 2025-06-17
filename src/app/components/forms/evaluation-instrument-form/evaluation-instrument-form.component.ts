import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';
import { Router } from '@angular/router';
import { FileService } from '../../../service/file/file.service';
import { File } from '../../../model/file';
import { MatFormField, MatLabel, MatOption, MatSelect } from '@angular/material/select';
import { Evaluation } from '../../../model/evaluation';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-evaluation-instrument-form',
  imports: [ReactiveFormsModule, NgFor, MatSelect, MatOption, MatFormField, MatLabel],
  templateUrl: './evaluation-instrument-form.component.html',
  styleUrl: './evaluation-instrument-form.component.css'
})
export class EvaluationInstrumentFormComponent {
  @Input()
  evaluationInstrument : EvaluationInstrument | null = null;
  files : File[] = [];
  evaluations: Evaluation[] = [];
  
    @Input()
    public evaluationInstrumentForm = new FormGroup({
          name : new FormControl('',[Validators.required]),
          evaluation : new FormControl(null),
          file : new FormControl(null)
        });
          
        @Output()
        submitEvent = new EventEmitter<EvaluationInstrument>();
          
        constructor(private service : EvaluationInstrumentService, private fileService : FileService, private router : Router){}
            
        ngOnInit(): void {
          this.fileService.getAll().subscribe((r)=>{
            this.files = r;
          });
        }
      
      onSubmit() {
        this.submitEvent.emit({...this.evaluationInstrumentForm.value as EvaluationInstrument});
      }
}
