import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaSkillsComponent } from './ya-skills.component';

describe('YaSkillsComponent', () => {
  let component: YaSkillsComponent;
  let fixture: ComponentFixture<YaSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
