import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaPersonalComponent } from './ya-personal.component';

describe('YaPersonalComponent', () => {
  let component: YaPersonalComponent;
  let fixture: ComponentFixture<YaPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
