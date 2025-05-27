import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { StudentServiceStaff } from '../../../model/student-service-staff';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { StudentServiceStaffService } from '../../../service/student-service-staff/student-service-staff.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-service-staff-table',
  imports: [MatFormField, MatLabel, MatPaginator, MatTableModule, CommonModule],
  templateUrl: './student-service-staff-table.component.html',
  styleUrl: './student-service-staff-table.component.css'
})
export class StudentServiceStaffTableComponent {
  displayedColumns: string[] = ['User', "First Name", "Last Name", "Office"];
  dataSource!: MatTableDataSource<StudentServiceStaff>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output()
  updateEvent = new EventEmitter<StudentServiceStaff>();

  @Output()
  deleteEvent = new EventEmitter<StudentServiceStaff>();
  
  constructor(private service: StudentServiceStaffService) {}
  
  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  ngOnInit() {
    this.service.getAll().subscribe(staff => {
      this.dataSource = new MatTableDataSource(staff);
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

  onUpdate(t : StudentServiceStaff){
    this.updateEvent.emit(t);
  }

  onDelete(t : StudentServiceStaff){
    this.updateEvent.emit(t);
  }
}
