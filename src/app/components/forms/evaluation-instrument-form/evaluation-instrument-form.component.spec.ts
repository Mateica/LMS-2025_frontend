import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInstrumentFormComponent } from './evaluation-instrument-form.component';

describe('EvaluationInstrumentFormComponent', () => {
  let component: EvaluationInstrumentFormComponent;
  let fixture: ComponentFixture<EvaluationInstrumentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationInstrumentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationInstrumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
