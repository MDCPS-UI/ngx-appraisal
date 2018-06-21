import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaInterestsComponent } from './ya-interests.component';

describe('YaInterestsComponent', () => {
  let component: YaInterestsComponent;
  let fixture: ComponentFixture<YaInterestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaInterestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
