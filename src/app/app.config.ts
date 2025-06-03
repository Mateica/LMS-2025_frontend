import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CalendarModule } from 'angular-calendar';
import { SchedulerModule } from 'angular-calendar-scheduler';
import { DateAdapter, MOMENT } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import moment from 'moment';

const calendarModuleWithProviders = CalendarModule.forRoot({
  provide: DateAdapter,
  useFactory: adapterFactory,
});

const schedulerModuleWithProviders = SchedulerModule.forRoot({
  locale: 'en',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      ToastrModule.forRoot({
        positionClass: 'toast-top-center',
        preventDuplicates: true,
        timeOut: 3000,
      }),
      CalendarModule,
      SchedulerModule
    ),
    ...(calendarModuleWithProviders.providers ?? []),
    ...(schedulerModuleWithProviders.providers ?? []),
    {
      provide: MOMENT,
      useValue: moment
    },
  ],
};