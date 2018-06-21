import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaHealthComponent } from './ya-health.component';

describe('YaHealthComponent', () => {
  let component: YaHealthComponent;
  let fixture: ComponentFixture<YaHealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaHealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
