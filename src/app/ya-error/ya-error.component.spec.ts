import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaErrorComponent } from './ya-error.component';

describe('YaErrorComponent', () => {
  let component: YaErrorComponent;
  let fixture: ComponentFixture<YaErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
