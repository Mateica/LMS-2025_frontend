import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Teacher } from '../../../model/teacher';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { RegisteredUser } from '../../../model/registered-user';
import { TeachingMaterial } from '../../../model/teaching-material';
import { Title } from '../../../model/title';

@Component({
  selector: 'app-teacher-table',
  imports: [],
  templateUrl: './teacher-table.component.html',
  styleUrl: './teacher-table.component.css'
})
export class TeacherTableComponent {
  columns: string[] = [
    "Email",
    "Username",
    "First Name",
    "Last Name",
    "UMCN",
    "Biography",
    "Titles",
    "Teaching Material",
    "Department"
  ];
  dataSource: MatTableDataSource<Teacher> = new MatTableDataSource<Teacher>();

  data : Teacher[] = [];
  users : RegisteredUser[] = [];
  titles : Title[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  constructor(private service: TeacherService) {
     this.service.getAll().subscribe(r => {
     this.data = r;
     this.dataSource.data = this.data;
  });

    this.dataSource.data = this.data;
  }

  @Output()
  updateEvent  = new EventEmitter<Teacher>();
      
  @Output()
  deleteEvent = new EventEmitter<Teacher>();
      
  onUpdate(t : Teacher){
    this.updateEvent.emit(t);
  }
      
  onDelete(t : Teacher){
    this.deleteEvent.emit(t);
  }
}
