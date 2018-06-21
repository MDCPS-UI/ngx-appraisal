import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaStipendsComponent } from './ya-stipends.component';

describe('YaStipendsComponent', () => {
  let component: YaStipendsComponent;
  let fixture: ComponentFixture<YaStipendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaStipendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaStipendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
