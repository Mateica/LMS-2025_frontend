import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ExaminationService } from '../../../service/examination/examination.service';
import { Router } from '@angular/router';
import { Examination } from '../../../model/examination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-exam-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './exam-table.component.html',
  styleUrl: './exam-table.component.css'
})
export class ExamTableComponent implements OnInit {
  @Input()
  exam : Examination | null = null;

  displayedColumns : string[] = ["NUmber of points", "Notes", "Evaluations", "Student"];

  @Input()
  dataSource!: MatTableDataSource<Examination>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private examService : ExaminationService, private router : Router){}

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  ngOnInit() {
    this.examService.getAll().subscribe(e => {
      this.dataSource = new MatTableDataSource(e);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  @Output()
  updateEvent = new EventEmitter<Examination>();

  @Output()
  deleteEvent = new EventEmitter<Examination>();

  onUpdate(t : Examination){
    this.updateEvent.emit(t);
  }

  onDelete(t : Examination){
    this.deleteEvent.emit(t);
  }


}
