import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CISC106Component } from './cisc106.component';

describe('Cisc106Component', () => {
  let component: CISC106Component;
  let fixture: ComponentFixture<CISC106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CISC106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CISC106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
