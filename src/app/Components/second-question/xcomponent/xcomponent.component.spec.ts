import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XComponentComponent } from './xcomponent.component';

describe('XComponentComponent', () => {
  let component: XComponentComponent;
  let fixture: ComponentFixture<XComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
