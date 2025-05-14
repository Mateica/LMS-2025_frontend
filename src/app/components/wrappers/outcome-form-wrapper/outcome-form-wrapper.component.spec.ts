import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcomeFormWrapperComponent } from './outcome-form-wrapper.component';

describe('OutcomeFormWrapperComponent', () => {
  let component: OutcomeFormWrapperComponent;
  let fixture: ComponentFixture<OutcomeFormWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutcomeFormWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutcomeFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
