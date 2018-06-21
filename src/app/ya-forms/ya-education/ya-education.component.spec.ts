import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaEducationComponent } from './ya-education.component';

describe('YaEducationComponent', () => {
  let component: YaEducationComponent;
  let fixture: ComponentFixture<YaEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
