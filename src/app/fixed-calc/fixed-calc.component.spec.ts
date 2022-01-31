import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCalcComponent } from './fixed-calc.component';

describe('FixedCalcComponent', () => {
  let component: FixedCalcComponent;
  let fixture: ComponentFixture<FixedCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
