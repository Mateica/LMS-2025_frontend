import { Component, OnInit, Inject, LOCALE_ID, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { CalendarModule } from 'angular-calendar';
import { endOfDay, addMonths } from 'date-fns';
import {
  DAYS_IN_WEEK,
  SchedulerViewDay,
  SchedulerViewHour,
  SchedulerViewHourSegment,
  CalendarSchedulerEvent,
  CalendarSchedulerEventAction,
  startOfPeriod,
  endOfPeriod,
  addPeriod,
  subPeriod,
  SchedulerDateFormatter,
  SchedulerEventTimesChangedEvent
} from 'angular-calendar-scheduler';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';

import { ExamSchedulerService } from '../../service/exam-scheduler/exam-scheduler.service';
import { Evaluation } from '../../model/evaluation';
import { MatDialog } from '@angular/material/dialog';
import { EvaluationFormDialogComponent } from '../forms/evaluation-form-dialog/evaluation-form-dialog.component';
import { MatProgressSpinnerModule, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-exam-scheduler',
  standalone: true,
  imports: [CommonModule, CalendarModule, SchedulerModule, MatProgressSpinnerModule],
  templateUrl: './exam-scheduler.component.html',
  styleUrl: './exam-scheduler.component.css',
  providers: [{
    provide: CalendarDateFormatter,
    useClass: SchedulerDateFormatter
  }]
})
export class ExamSchedulerComponent implements OnInit {

  isLoading: boolean = true;
  mode: ProgressSpinnerMode = 'indeterminate';

  CalendarView = CalendarView;
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = DAYS_IN_WEEK;
  locale: string = 'en';
  hourSegments: number = 4;
  weekStartsOn: number = 1;
  startsWithToday: boolean = true;
  activeDayIsOpen: boolean = true;
  excludeDays: number[] = [];
  dayStartHour: number = 6;
  dayEndHour: number = 22;

  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));

  dayModifier: Function;
  hourModifier: Function;
  segmentModifier: Function;
  eventModifier: Function;
  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;

  actions: CalendarSchedulerEventAction[] = [
    {
      when: 'enabled',
      label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
      title: 'Delete',
      onClick: (event: CalendarSchedulerEvent): void => {
        console.log('Pressed action \'Delete\' on event ' + event.id);
      }
    },
    {
      when: 'cancelled',
      label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
      title: 'Restore',
      onClick: (event: CalendarSchedulerEvent): void => {
        console.log('Pressed action \'Restore\' on event ' + event.id);
      }
    }
  ];

  events: CalendarSchedulerEvent[];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustViewDays();
  }

  constructor(
    @Inject(LOCALE_ID) locale: string,
    private appService: ExamSchedulerService,
    private dateAdapter: DateAdapter,
    private dialog: MatDialog
  ) {
    this.locale = locale;

    this.segmentModifier = ((segment: SchedulerViewHourSegment): void => {
      segment.isDisabled = !this.isDateValid(segment.date);
    }).bind(this);

    this.eventModifier = ((event: CalendarSchedulerEvent): void => {
      event.isDisabled = !this.isDateValid(event.start);
    }).bind(this);

    this.adjustViewDays();
    this.dateOrViewChanged();
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.appService.getAll().subscribe({
      next: (evaluations: Evaluation[]) => {
        this.events = evaluations.map(evaluation => ({
          id: evaluation.id?.toString() ?? '',
          start: new Date(evaluation.startTime),
          end: new Date(evaluation.endTime),
          title: evaluation.evaluationType?.name || 'Untitled Evaluation',
          content: evaluation.evaluationInstrument?.name || 'No content',
          color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
          actions: this.actions,
          status: 'ok',
          isClickable: true,
          isDisabled: !evaluation.active,
          draggable: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          }
        }));
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Greška pri učitavanju evaluacija', err);
        this.isLoading = false;
      }
    });
  }

  adjustViewDays(): void {
    const currentWidth: number = window.innerWidth;
    if (currentWidth <= 450) {
      this.viewDays = 1;
    } else if (currentWidth <= 768) {
      this.viewDays = 3;
    } else {
      this.viewDays = DAYS_IN_WEEK;
    }
  }

  changeDate(date: Date): void {
    this.viewDate = date;
    this.dateOrViewChanged();
  }

  changeView(view: CalendarView): void {
    this.view = view;
    this.dateOrViewChanged();
  }

  dateOrViewChanged(): void {
    if (this.startsWithToday) {
      this.prevBtnDisabled = !this.isDateValid(subPeriod(this.dateAdapter, CalendarView.Day, this.viewDate, 1));
      this.nextBtnDisabled = !this.isDateValid(addPeriod(this.dateAdapter, CalendarView.Day, this.viewDate, 1));
    } else {
      this.prevBtnDisabled = !this.isDateValid(endOfPeriod(this.dateAdapter, CalendarView.Day, subPeriod(this.dateAdapter, CalendarView.Day, this.viewDate, 1)));
      this.nextBtnDisabled = !this.isDateValid(startOfPeriod(this.dateAdapter, CalendarView.Day, addPeriod(this.dateAdapter, CalendarView.Day, this.viewDate, 1)));
    }

    if (this.viewDate < this.minDate) {
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
      this.changeDate(this.maxDate);
    }
  }

  private isDateValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }

  dayHeaderClicked(day: SchedulerViewDay): void {
    console.log('dayHeaderClicked Day', day);
  }

  hourClicked(hour: SchedulerViewHour): void {
    console.log('hourClicked Hour', hour);
  }

  segmentClicked(action: string, segment: SchedulerViewHourSegment): void {
    const dialogRef = this.dialog.open(EvaluationFormDialogComponent, {
      width: '500px',
      data: {
        startTime: segment.date,
        endTime: new Date(segment.date.getTime() + 60 * 60 * 1000)
      }
    });

    dialogRef.afterClosed().subscribe((result: Evaluation | undefined) => {
      if (result) {
        const newEvent: CalendarSchedulerEvent = {
          id: (this.events.length + 1).toString(),
          start: new Date(result.startTime),
          end: new Date(result.endTime),
          title: result.evaluationType?.name ?? 'Nova evaluacija',
          content: result.evaluationInstrument?.name ?? '',
          color: { primary: '#90CAF9', secondary: '#E3F2FD' },
          actions: this.actions,
          status: 'ok',
          isClickable: true,
          isDisabled: false
        };

        this.events = [...this.events, newEvent];
      }
    });
  }

  eventClicked(action: string, event: CalendarSchedulerEvent): void {
    console.log('eventClicked Action', action);
    console.log('eventClicked Event', event);
  }

  eventTimesChanged({ event, newStart, newEnd, type }: SchedulerEventTimesChangedEvent): void {
    console.log('eventTimesChanged Type', type);
    console.log('eventTimesChanged Event', event);
    console.log('eventTimesChanged New Times', newStart, newEnd);
    const ev: CalendarSchedulerEvent = this.events.find(e => e.id === event.id) as CalendarSchedulerEvent;
    ev.start = newStart;
    ev.end = newEnd;
  }
}
