import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaPlacementsComponent } from './ya-placements.component';

describe('YaPlacementsComponent', () => {
  let component: YaPlacementsComponent;
  let fixture: ComponentFixture<YaPlacementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaPlacementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
