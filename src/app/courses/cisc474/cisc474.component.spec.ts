import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CISC474Component } from './cisc474.component';

describe('CISC474Component', () => {
  let component: CISC474Component;
  let fixture: ComponentFixture<CISC474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CISC474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CISC474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
