import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CISC220Component } from './cisc220.component';

describe('CISC220Component', () => {
  let component: CISC220Component;
  let fixture: ComponentFixture<CISC220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CISC220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CISC220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
