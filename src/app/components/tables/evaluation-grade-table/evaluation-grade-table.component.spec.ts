import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGradeTableComponent } from './evaluation-grade-table.component';

describe('EvaluationGradeTableComponent', () => {
  let component: EvaluationGradeTableComponent;
  let fixture: ComponentFixture<EvaluationGradeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationGradeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationGradeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
