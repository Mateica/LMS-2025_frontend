import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationTypeFormWrapperComponent } from './evaluation-type-form-wrapper.component';

describe('EvaluationTypeFormWrapperComponent', () => {
  let component: EvaluationTypeFormWrapperComponent;
  let fixture: ComponentFixture<EvaluationTypeFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationTypeFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationTypeFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
