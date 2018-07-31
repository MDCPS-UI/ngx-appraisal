import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaLandingComponent } from './ya-landing.component';

describe('YaLandingComponent', () => {
  let component: YaLandingComponent;
  let fixture: ComponentFixture<YaLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
