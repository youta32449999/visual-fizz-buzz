import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzParamComponent } from './fizz-buzz-param.component';

describe('FizzBuzzParamComponent', () => {
  let component: FizzBuzzParamComponent;
  let fixture: ComponentFixture<FizzBuzzParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzBuzzParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
