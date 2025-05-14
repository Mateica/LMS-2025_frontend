import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Outcome } from '../../../model/outcome';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { OutcomeService } from '../../../service/outcome/outcome.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-outcome-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
  templateUrl: './outcome-table.component.html',
  styleUrl: './outcome-table.component.css'
})
export class OutcomeTableComponent {
  columns: string[] = ["Description", "Education Goal", "Teaching Material", "Subject"];
  dataSource: MatTableDataSource<Outcome> = new MatTableDataSource<Outcome>();

  @Input()
  data : Outcome[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output()
  updateEvent : EventEmitter<Outcome> = new EventEmitter<Outcome>();

  @Output()
  deleteEvent : EventEmitter<Outcome> = new EventEmitter<Outcome>();

  
  constructor(private service: OutcomeService) {}
  
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  ngOnInit() {
    this.service.getAll().subscribe(roles => {
      this.dataSource = new MatTableDataSource(roles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  onUpdate(t : Outcome){
    this.updateEvent.emit(t);
  }

  onDelete(t : Outcome){
    this.deleteEvent.emit(t);
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
