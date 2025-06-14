import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EvaluationGrade, EvaluationGradeView } from '../../../model/evaluation-grade';
import { Router } from '@angular/router';
import { ExaminationService } from '../../../service/examination/examination.service';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { Evaluation } from '../../../model/evaluation';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { TeacherService } from '../../../service/teacher/teacher.service';

@Component({
  selector: 'app-grades-table',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule],
  templateUrl: './grades-table.component.html',
  styleUrl: './grades-table.component.css'
})
export class GradesTableComponent {
  @Input()
  grade: EvaluationGrade | null = null;

  grades : EvaluationGrade[] = [];

  displayedColumns: string[] = ["evaluation", "student", "teacher", "dateTimeEvaluated", "mark", "options"];


  dataSource!: MatTableDataSource<EvaluationGradeView>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private gradeService: EvaluationGradeService, private evalService: EvaluationService,
    private teacherService: TeacherService, private router: Router) { }

  ngAfterViewInit() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  ngOnInit() {
    this.gradeService.getAllActive().subscribe(r => {
    this.grades = r;

    const viewData: EvaluationGradeView[] = r.map(g => ({
      id: g.id ?? 0,
      studentIndex: g.evaluation?.examination?.studentOnYear?.indexNumber ?? '-',
      teacherFullName: g.teacher ? `${g.teacher.firstName} ${g.teacher.lastName}` : '-',
      dateTimeEvaluated: g.dateTimeEvaluated,
      mark: g.mark,
    }));

    this.dataSource = new MatTableDataSource(viewData);
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
  updateEvent = new EventEmitter<EvaluationGrade>();

  @Output()
  deleteEvent = new EventEmitter<EvaluationGrade>();

  @Output()
  exportPDFEvent = new EventEmitter<EvaluationGrade>();

  @Output()
  exportXMLEvent = new EventEmitter<EvaluationGrade>();

  onUpdate(t: EvaluationGrade) {
    this.updateEvent.emit(t);
  }

  onDelete(t: EvaluationGrade) {
    this.deleteEvent.emit(t);
  }

  onExportPDF(t: EvaluationGrade) {
    this.exportPDFEvent.emit(t);
  }

  onExportXML(t: EvaluationGrade) {
    this.exportXMLEvent.emit(t);
  }

}
