import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YComponentComponent } from './ycomponent.component';

describe('YComponentComponent', () => {
  let component: YComponentComponent;
  let fixture: ComponentFixture<YComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
