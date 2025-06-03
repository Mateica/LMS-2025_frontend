import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatButtonModule, MatTableModule,MatSortModule],
  templateUrl: './exam-table.component.html',
  styleUrl: './exam-table.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExamTableComponent implements OnInit {

  @Input()
  exam: Examination | null = null;

  displayedColumns = ['numberOfPoints', 'notes', 'evaluations', 'studentOnYear'];

  @Input()
  dataSource = new MatTableDataSource<Examination>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() updateEvent = new EventEmitter<Examination>();
  @Output() deleteEvent = new EventEmitter<Examination>();

  constructor(private examService: ExaminationService, private router: Router) {}

  ngOnInit() {
    this.examService.getAllActive().subscribe((exams) => {
      this.dataSource.data = exams;
    });

    this.dataSource.filterPredicate = (data: Examination, filter: string) => {
      const filterLower = filter.trim().toLowerCase();

      const numberOfPoints = data.numberOfPoints?.toString() ?? '';
      const notes = data.notes?.map(n => n.content).join(' ') ?? '';
      const evaluations = data.evaluations?.map(e =>
        `${e.startTime} ${e.endTime} ${e.evaluationType?.name ?? ''} ${e.evaluationInstrument?.name ?? ''}`
      ).join(' ') ?? '';
      const student = data.studentOnYear?.indexNumber ?? '';

      const combined = `${numberOfPoints} ${notes} ${evaluations} ${student}`.toLowerCase();

      return combined.includes(filterLower);
    };

    this.dataSource.sortingDataAccessor = (item: Examination, property: string) => {
      switch (property) {
        case 'notes':
          return item.notes?.map(n => n.content).join(', ') ?? '';
        case 'evaluations':
          return item.evaluations?.length ?? 0;
        case 'studentOnYear':
          return item.studentOnYear?.indexNumber ?? '';
        default:
          return (item as any)[property];
      }
    };
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onUpdate(exam: Examination) {
    this.updateEvent.emit(exam);
  }

  onDelete(exam: Examination) {
    this.deleteEvent.emit(exam);
  }
}
