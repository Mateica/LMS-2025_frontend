import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWrapperComponent } from './country-wrapper.component';

describe('CountryWrapperComponent', () => {
  let component: CountryWrapperComponent;
  let fixture: ComponentFixture<CountryWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryWrapperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
