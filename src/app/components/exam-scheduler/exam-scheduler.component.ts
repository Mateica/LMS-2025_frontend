import { Component, OnInit, ViewChild } from '@angular/core';
import { EvaluationService } from '../../service/evaluation/evaluation.service';
import { ActionEventArgs, EventSettingsModel, ScheduleComponent, ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Evaluation } from '../../model/evaluation';

@Component({
  selector: 'app-exam-scheduler',
  imports: [ScheduleModule, BrowserAnimationsModule],
  templateUrl: './exam-scheduler.component.html',
  styleUrl: './exam-scheduler.component.css'
})
export class ExamSchedulerComponent implements OnInit {
 @ViewChild('scheduleObj') scheduleObj!: ScheduleComponent;

  public loading = false;

  public eventSettings: EventSettingsModel = {
    dataSource: [],
    fields: {
      id: 'id',
      subject: { name: 'subject' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
      location: { name: 'location' }
    }
  };

  constructor(private evalService: EvaluationService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.loading = true;
    this.evalService.getSchedule().subscribe({
      next: (data) => {
        this.eventSettings.dataSource = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load events', err);
        this.loading = false;
      }
    });
  }

  onActionComplete(args: ActionEventArgs): void {
    if (this.loading) return;

    if (args.requestType === 'eventCreated' && args.addedRecords?.length) {
      const evaluation = args.addedRecords[0] as Evaluation;
      this.loading = true;
      this.evalService.create(evaluation).subscribe({
        next: () => this.loadEvents(),
        error: (err) => {
          console.error('Create failed', err);
          this.loading = false;
        }
      });
    } else if (args.requestType === 'eventChanged' && args.changedRecords?.length) {
      const updatedRecord = args.changedRecords[0] as Evaluation;
      this.loading = true;
      this.evalService.update(updatedRecord.id!, updatedRecord).subscribe({
        next: () => this.loadEvents(),
        error: (err) => {
          console.error('Update failed', err);
          this.loading = false;
        }
      });
    } else if (args.requestType === 'eventRemoved' && args.deletedRecords?.length) {
      const deletedRecord = args.deletedRecords[0] as Evaluation;
      this.loading = true;
      this.evalService.delete(deletedRecord.id!).subscribe({
        next: () => this.loadEvents(),
        error: (err) => {
          console.error('Delete failed', err);
          this.loading = false;
        }
      });
    }
  }
}
