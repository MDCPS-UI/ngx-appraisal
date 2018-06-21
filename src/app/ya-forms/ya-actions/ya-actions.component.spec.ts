import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaActionsComponent } from './ya-actions.component';

describe('YaActionsComponent', () => {
  let component: YaActionsComponent;
  let fixture: ComponentFixture<YaActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
