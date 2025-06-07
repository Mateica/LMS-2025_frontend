import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGradeTableWrapperComponent } from './evaluation-grade-table-wrapper.component';

describe('EvaluationGradeTableWrapperComponent', () => {
  let component: EvaluationGradeTableWrapperComponent;
  let fixture: ComponentFixture<EvaluationGradeTableWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationGradeTableWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationGradeTableWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
