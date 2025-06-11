import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationFormWrapperComponent } from './evaluation-form-wrapper.component';

describe('EvaluationFormWrapperComponent', () => {
  let component: EvaluationFormWrapperComponent;
  let fixture: ComponentFixture<EvaluationFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluationFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluationFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
