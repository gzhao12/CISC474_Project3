import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBackComponentComponent } from './call-back-component.component';

describe('CallBackComponentComponent', () => {
  let component: CallBackComponentComponent;
  let fixture: ComponentFixture<CallBackComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBackComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
