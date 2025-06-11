import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGradeFormWrapperComponent } from './evaluation-grade-form-wrapper.component';

describe('EvaluationGradeFormWrapperComponent', () => {
  let component: EvaluationGradeFormWrapperComponent;
  let fixture: ComponentFixture<EvaluationGradeFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationGradeFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationGradeFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
