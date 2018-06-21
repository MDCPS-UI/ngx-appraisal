import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaParentingComponent } from './ya-parenting.component';

describe('YaParentingComponent', () => {
  let component: YaParentingComponent;
  let fixture: ComponentFixture<YaParentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaParentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaParentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
