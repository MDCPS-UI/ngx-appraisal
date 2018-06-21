import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaFormsComponent } from './ya-forms.component';

describe('YaFormsComponent', () => {
  let component: YaFormsComponent;
  let fixture: ComponentFixture<YaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
