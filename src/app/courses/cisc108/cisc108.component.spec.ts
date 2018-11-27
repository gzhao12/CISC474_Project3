import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CISC108Component } from './cisc108.component';

describe('CISC108Component', () => {
  let component: CISC108Component;
  let fixture: ComponentFixture<CISC108Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CISC108Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CISC108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
