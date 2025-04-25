import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTypeFormComponent } from './evaluation-type-form.component';

describe('EvaluationTypeFormComponent', () => {
  let component: EvaluationTypeFormComponent;
  let fixture: ComponentFixture<EvaluationTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationTypeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
