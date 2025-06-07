import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EvaluationGrade } from '../../../model/evaluation-grade';
import { EvaluationGradeService } from '../../../service/evaluation-grade/evaluation-grade.service';
import { Router } from '@angular/router';
import { Role } from '../../../model/role';

@Component({
  selector: 'app-evaluation-grade-table',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule
  ],
  templateUrl: './evaluation-grade-table.component.html',
  styleUrl: './evaluation-grade-table.component.css'
})
export class EvaluationGradeTableComponent implements OnInit {
  @Input() grade: EvaluationGrade | null = null;
  @Input() role: Role | null = null;

    @Output() updateEvent = new EventEmitter<EvaluationGrade>();
    @Output() deleteEvent = new EventEmitter<EvaluationGrade>();
    @Output() exportPdfEvent = new EventEmitter<EvaluationGrade>();
    @Output() exportXmlEvent = new EventEmitter<EvaluationGrade>();

    displayedColumns = [
      'evaluation',
      'teacher',
      'dateTimeEvaluated',
      'mark',
    ];

    @Input()
    dataSource = new MatTableDataSource<EvaluationGrade>([]);

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(
      private gradeService: EvaluationGradeService,
      private router: Router
    ) {}

    ngOnInit() {
      this.gradeService.getAllActive().subscribe((r) => {
        this.dataSource = new MatTableDataSource(r);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });

      this.dataSource.filterPredicate = (data: EvaluationGrade, filter: string) => {
        const filterLower = filter.trim().toLowerCase();
        const evaluation = `${data.evaluation?.evaluationType?.name} ${data.evaluation?.subjectRealization?.subject.name}`;
        const teacher = `${data.teacher?.firstName} ${data.teacher?.lastName}`;
        const dateTimeEvaluated = data.dateTimeEvaluated;
        const mark = data.mark;
        const combined = `${evaluation} ${mark} ${dateTimeEvaluated} ${teacher}`.toLowerCase();
        return combined.includes(filterLower);
      };

      this.dataSource.sortingDataAccessor = (item: EvaluationGrade, property: string) => {
        switch (property) {
          case 'evaluation':
            return item.evaluation;
          case 'teacher':
            return item.teacher;
          case 'dateTimeEvaluated':
            return item.dateTimeEvaluated;
          case 'mark':
            return item.mark;
          default:
            return (item as any)[property];
        }
      };
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    onUpdate(t: EvaluationGrade) {
      this.updateEvent.emit(t);
    }

    onDelete(t: EvaluationGrade) {
      this.deleteEvent.emit(t);
    }

    onExportPdf(t: EvaluationGrade) {
      this.exportPdfEvent.emit(t);
    }

    onExportXml(t: EvaluationGrade) {
      this.exportXmlEvent.emit(t);
    }
  
}
