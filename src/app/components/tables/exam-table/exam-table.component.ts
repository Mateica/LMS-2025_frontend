import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatTableDataSource,
  MatTableModule
} from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {
  MatPaginator,
  MatPaginatorModule
} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { ExaminationService } from '../../../service/examination/examination.service';
import { Examination } from '../../../model/examination';
import { AuthService } from '../../../auth/auth.service';
import { FileService } from '../../../service/file/file.service';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-exam-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatButtonModule,
    NgIf
  ],
  templateUrl: './exam-table.component.html',
  styleUrl: './exam-table.component.css',
})
export class ExamTableComponent implements OnInit {
  @Input() exam: Examination | null = null;
  @Input() canRegister: boolean = true;
  @Input() canHandleFile: boolean = true;
  @Output() updateEvent = new EventEmitter<Examination>();
  @Output() deleteEvent = new EventEmitter<Examination>();
  @Output() exportPdfEvent = new EventEmitter<Examination>();
  @Output() exportXmlEvent = new EventEmitter<Examination>();
  @Output() registerExamEvent = new EventEmitter<Examination>();

  displayedColumns = [
    'numberOfPoints',
    'notes',
    'evaluations',
    'studentOnYear',
    'actions',
  ];

  @Input()
  dataSource = new MatTableDataSource<Examination>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private examService: ExaminationService,
    private authService: AuthService,
    private fileService: FileService,
    private toaster : ToastrService
  ) { }

  ngOnInit() {
    this.examService.getAllActive().subscribe((exams) => {
      this.dataSource = new MatTableDataSource(exams);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.dataSource.filterPredicate = (data: Examination, filter: string) => {
      const filterLower = filter.trim().toLowerCase();
      const numberOfPoints = data.numberOfPoints?.toString() ?? '';
      const notes = data.notes?.map((n) => n.content).join(' ') ?? '';
      const evaluations = data.evaluations?.map(
        (e) =>
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

  onRegisterExam(exam: Examination) {
    console.log("On register exam");
    this.registerExamEvent.emit(exam);
  }

  onExportPdf(exam: Examination) {
    this.exportPdfEvent.emit(exam);
  }

  onExportXml(exam: Examination) {
    this.exportXmlEvent.emit(exam);
  }

  containsRole(roleName: string): boolean {
    const currentUserRoles = this.authService.currentUserRoles;
    return currentUserRoles.includes(roleName);
  }

  currentlyLoggedInRoleEquals(roleName: string): boolean {
    const currentlyLoggedInRole = this.authService.currentlyLoggedInRole;
    return currentlyLoggedInRole === roleName;
  }

  // TODO: Pitati asistenta da li je EvaluationInstrument neophodan model i da li je bolje file vezati za sam evaluation
  // TODO: onHandleFile() raditi za svaki evaluation unutar jednog examination
 onHandleFile(exam: Examination) {
  const role = this.authService.currentlyLoggedInRole;

  if (role === 'STUDENT') {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';

    input.onchange = () => {
      const file = input.files?.[0];
      if (!file) return;

      const studentId = exam.studentOnYear?.id;
      const evalId = exam.evaluations?.[0]?.id;

      if (!studentId) {
        this.toaster.error('Missing student ID.');
        return;
      }

      const formData = new FormData();
      formData.append('mpf', file);
      formData.append('studentId', studentId.toString());
      formData.append('description', 'Student file upload');
      formData.append('url', 'N/A');

      this.fileService.uploadFile(formData).subscribe({
        next: () => this.toaster.error('File uploaded successfully.'),
        error: () => this.toaster.error('File upload failed.')
      });
    };

    input.click();
  }
}


}
