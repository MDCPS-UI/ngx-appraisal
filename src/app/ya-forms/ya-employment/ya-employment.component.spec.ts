import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaEmploymentComponent } from './ya-employment.component';

describe('YaEmploymentComponent', () => {
  let component: YaEmploymentComponent;
  let fixture: ComponentFixture<YaEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
