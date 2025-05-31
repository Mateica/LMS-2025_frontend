import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarSchedulerViewComponent, SchedulerModule } from 'angular-calendar-scheduler';
import { CalendarEvent } from 'angular-calendar';
import { Subject } from 'rxjs';
import { CalendarModule } from 'angular-calendar';
import { CalendarSchedulerEvent } from 'angular-calendar-scheduler';

@Component({
  selector: 'app-exam-scheduler',
  imports: [CommonModule,
    CalendarModule,
    SchedulerModule],
  templateUrl: './exam-scheduler.component.html',
  styleUrl: './exam-scheduler.component.css'
})
export class ExamSchedulerComponent implements OnInit {



  constructor() {}

  ngOnInit(): void {
  }

  

}
