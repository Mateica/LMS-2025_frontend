import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { EvaluationType } from '../../../model/evaluation-type';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EvaluationTypeService } from '../../../service/evaluation-type/evaluation-type.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-evaluation-type-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './evaluation-type-table.component.html',
  styleUrl: './evaluation-type-table.component.css'
})
export class EvaluationTypeTableComponent {
  columns: string[] = ["Name"];
  dataSource: MatTableDataSource<EvaluationType> = new MatTableDataSource<EvaluationType>();
  data : EvaluationType[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: EvaluationTypeService) {
     this.service.getAll().subscribe(r => {
     this.data = r;
     this.dataSource.data = this.data;
  });

    this.dataSource.data = this.data;
  }

  @Output()
  updateEvent  = new EventEmitter<EvaluationType>();
      
  @Output()
  deleteEvent = new EventEmitter<EvaluationType>();
      
  onUpdate(evaluationType : EvaluationType){
    this.updateEvent.emit(evaluationType);
  }
      
  onDelete(evaluationType : EvaluationType){
    this.deleteEvent.emit(evaluationType);
  }
}
