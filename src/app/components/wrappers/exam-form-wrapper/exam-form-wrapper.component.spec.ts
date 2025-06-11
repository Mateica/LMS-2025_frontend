import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamFormWrapperComponent } from './exam-form-wrapper.component';

describe('ExamFormWrapperComponent', () => {
  let component: ExamFormWrapperComponent;
  let fixture: ComponentFixture<ExamFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
