import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationInstrumentFormWrapperComponent } from './evaluation-instrument-form-wrapper.component';

describe('EvaluationInstrumentFormWrapperComponent', () => {
  let component: EvaluationInstrumentFormWrapperComponent;
  let fixture: ComponentFixture<EvaluationInstrumentFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationInstrumentFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationInstrumentFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
