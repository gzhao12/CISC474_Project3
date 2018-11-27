import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CISC181Component } from './cisc181.component';

describe('CISC181Component', () => {
  let component: CISC181Component;
  let fixture: ComponentFixture<CISC181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CISC181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CISC181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
