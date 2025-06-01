import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTableWrapperComponent } from './exam-table-wrapper.component';

describe('ExamTableWrapperComponent', () => {
  let component: ExamTableWrapperComponent;
  let fixture: ComponentFixture<ExamTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
