import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTableComponent } from './generic-table.component';

describe('GenericTableComponent', () => {
  let component: GenericTableComponent<any>;
  let fixture: ComponentFixture<GenericTableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

deleteItemWorks(){
  it('should delete item upon clicking `delete` button', () =>{
    let fixture  = TestBed.createComponent(GenericTableComponent);
    let component = fixture.componentInstance
    let rows = component.data.length;
    expect(rows).toEqual(rows-1);
  })
}