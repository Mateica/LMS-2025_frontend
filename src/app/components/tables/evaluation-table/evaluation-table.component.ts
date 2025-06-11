import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Evaluation } from '../../../model/evaluation';
import { Role } from '../../../model/role';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { EvaluationService } from '../../../service/evaluation/evaluation.service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-evaluation-table',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule],
  templateUrl: './evaluation-table.component.html',
  styleUrl: './evaluation-table.component.css'
})
export class EvaluationTableComponent {
  @Input() evaluation: Evaluation | null = null;
  @Input() role: Role | null = null;

  @Output() updateEvent = new EventEmitter<Evaluation>();
  @Output() deleteEvent = new EventEmitter<Evaluation>();
  @Output() exportPdfEvent = new EventEmitter<Evaluation>();
  @Output() exportXmlEvent = new EventEmitter<Evaluation>();

  displayedColumns = [
    'startTime',
    'endTime',
    'numberOfPoints',
    'evaluationType',
    'evaluationInstrument',
    'subjectRealization',
    'evaluationGrades',
    'studentOnYear',
    'actions',
  ];

  @Input()
  dataSource = new MatTableDataSource<Evaluation>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private evalService: EvaluationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.evalService.getAllActive().subscribe((e) => {
      this.dataSource = new MatTableDataSource(e);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.dataSource.filterPredicate = (data: Evaluation, filter: string) => {
      const filterLower = filter.trim().toLowerCase();
      const startTime = data.startTime;
      const endTime = data.endTime;
      const numberOfPoints = data.numberOfPoints?.toString() ?? '';
      const evaluationType = data.evaluationType?.name.toString() ?? '';
      const evaluationInstrument = data.evaluationInstrument?.name.toString() ?? '';
      const subjectRealization = data.subjectRealization?.subject?.name.toString() ?? '';
      const evaluationGrades = data.evaluationGrades.map((g)=> g.mark).join(' ');
      const combined = `${startTime} ${endTime} ${numberOfPoints} ${evaluationType} ${evaluationInstrument} ${subjectRealization} ${evaluationGrades}`.toLowerCase();
      return combined.includes(filterLower);
    };

    this.dataSource.sortingDataAccessor = (item: Evaluation, property: string) => {
      switch (property) {
        case 'startTime':
          return item.startTime ?? '';
        case 'endTime':
          return item.startTime ?? '';
        case 'numberOfPoints':
          return item.numberOfPoints ?? 0;
        case 'evaluationType':
          return item.evaluationType?.name ?? '';
        case 'evaluationInstrument':
          return item.evaluationInstrument?.name ?? '';
        case 'subjectRealization':
          return item.subjectRealization?.subject?.name ?? '';
        case 'evaluationGrades': 
          return item.evaluationGrades.at(item.evaluationGrades.length-1) ?? ''; // Najskorija ocena
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

  onUpdate(e: Evaluation) {
    this.updateEvent.emit(e);
  }

  onDelete(e: Evaluation) {
    this.deleteEvent.emit(e);
  }

  onExportPdf(e: Evaluation) {
    this.exportPdfEvent.emit(e);
  }

  onExportXml(e: Evaluation) {
    this.exportXmlEvent.emit(e);
  }
}
