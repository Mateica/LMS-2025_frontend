import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Teacher } from '../../../model/teacher';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TeacherService } from '../../../service/teacher/teacher.service';
import { RegisteredUser } from '../../../model/registered-user';
import { TeachingMaterial } from '../../../model/teaching-material';
import { Title } from '../../../model/title';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { RegisteredUserService } from '../../../service/registered-user/registered-user.service';
import { TitleService } from '../../../service/title/title.service';
import { Router } from '@angular/router';
import { TeacherOnRealization } from '../../../model/teacher-on-realization';
import { TeacherOnRealizationService } from '../../../service/teacher-on-realization/teacher-on-realization.service';
import { TeachingMaterialService } from '../../../service/teaching-material/teaching-material.service';
import { DepartmentService } from '../../../service/department/department.service';
import { Department } from '../../../model/department';

@Component({
  selector: 'app-teacher-table',
  imports: [MatFormField, MatLabel, MatPaginator, MatTableModule, CommonModule],
  templateUrl: './teacher-table.component.html',
  styleUrl: './teacher-table.component.css'
})
export class TeacherTableComponent {
  displayedColumns: string[] = [
    "Email",
    "Username",
    "First Name",
    "Last Name",
    "UMCN",
    "Biography",
    "Titles",
    "Teaching Material",
    "Department",
    "Options"
  ];

  @Input()
  dataSource!: MatTableDataSource<Teacher>;
  
  userSource! : MatTableDataSource<RegisteredUser>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input()
  data : Teacher[] = [];
  users : RegisteredUser[] = [];
  titles : Title[] = [];
  teachersOnRealization : TeacherOnRealization[] = [];
  teachingMaterials : TeachingMaterial[] = [];
  departments : Department[] = [];



  constructor(private teacherService : TeacherService, private userService : RegisteredUserService, private titleService : TitleService, private teacherOnRealizationService : TeacherOnRealizationService,
    private teachingMaterialService : TeachingMaterialService, private departmentService : DepartmentService, private router : Router){}

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }
  
  ngOnInit() {
    this.teacherService.getAll().subscribe(t => {
      this.dataSource = new MatTableDataSource(t);
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
  updateEvent  = new EventEmitter<Teacher>();

  @Output()
  exportXMLEvent  = new EventEmitter<Teacher>();

  @Output()
  exportPDFEvent  = new EventEmitter<Teacher>();
      
  @Output()
  deleteEvent = new EventEmitter<Teacher>();
      
  onUpdate(t : Teacher){
    this.updateEvent.emit(t);
  }
      
  onDelete(t : Teacher){
    this.deleteEvent.emit(t);
  }

  onExportXML(t : Teacher){
    this.exportXMLEvent.emit(t);
  }

  onExportPDF(t : Teacher){
    this.exportPDFEvent.emit(t);
  }
}
