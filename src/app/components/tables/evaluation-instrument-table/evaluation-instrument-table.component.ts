import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { EvaluationInstrument } from '../../../model/evaluation-instrument';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EvaluationInstrumentService } from '../../../service/evaluation-instrument/evaluation-instrument.service';

@Component({
  selector: 'app-evaluation-instrument-table',
  imports: [],
  templateUrl: './evaluation-instrument-table.component.html',
  styleUrl: './evaluation-instrument-table.component.css'
})
export class EvaluationInstrumentTableComponent {
  columns: string[] = ["Name", "File"];
  dataSource: MatTableDataSource<EvaluationInstrument> = new MatTableDataSource<EvaluationInstrument>();

  @Input()
  data : EvaluationInstrument[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: EvaluationInstrumentService) {
     this.service.getAll().subscribe(r => {
     this.data = r;
     this.dataSource.data = this.data;
  });

    this.dataSource.data = this.data;
  }

  @Output()
  updateEvent  = new EventEmitter<EvaluationInstrument>();
      
  @Output()
  deleteEvent = new EventEmitter<EvaluationInstrument>();
      
  onUpdate(t : EvaluationInstrument){
    this.updateEvent.emit(t);
  }
      
  onDelete(t : EvaluationInstrument){
    this.deleteEvent.emit(t);
  }
}
