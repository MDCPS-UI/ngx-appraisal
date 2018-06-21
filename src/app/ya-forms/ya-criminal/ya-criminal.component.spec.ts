import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaCriminalComponent } from './ya-criminal.component';

describe('YaCriminalComponent', () => {
  let component: YaCriminalComponent;
  let fixture: ComponentFixture<YaCriminalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaCriminalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaCriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
