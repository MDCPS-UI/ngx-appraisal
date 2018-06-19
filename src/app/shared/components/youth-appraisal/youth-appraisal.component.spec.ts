import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthAppraisalComponent } from './youth-appraisal.component';

describe('YouthAppraisalComponent', () => {
  let component: YouthAppraisalComponent;
  let fixture: ComponentFixture<YouthAppraisalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthAppraisalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
