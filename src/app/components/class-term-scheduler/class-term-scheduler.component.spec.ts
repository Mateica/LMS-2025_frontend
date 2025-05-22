import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTermSchedulerComponent } from './class-term-scheduler.component';

describe('ClassTermSchedulerComponent', () => {
  let component: ClassTermSchedulerComponent;
  let fixture: ComponentFixture<ClassTermSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassTermSchedulerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassTermSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
