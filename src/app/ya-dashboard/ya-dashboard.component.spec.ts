import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaDashboardComponent } from './ya-dashboard.component';

describe('YaDashboardComponent', () => {
  let component: YaDashboardComponent;
  let fixture: ComponentFixture<YaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
