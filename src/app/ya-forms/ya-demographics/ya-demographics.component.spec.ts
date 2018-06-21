import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaDemographicsComponent } from './ya-demographics.component';

describe('YaDemographicsComponent', () => {
  let component: YaDemographicsComponent;
  let fixture: ComponentFixture<YaDemographicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaDemographicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
