import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationGradeFormComponent } from './evaluation-grade-form.component';

describe('EvaluationGradeFormComponent', () => {
  let component: EvaluationGradeFormComponent;
  let fixture: ComponentFixture<EvaluationGradeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationGradeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationGradeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
