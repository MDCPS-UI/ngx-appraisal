import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaHousingComponent } from './ya-housing.component';

describe('YaHousingComponent', () => {
  let component: YaHousingComponent;
  let fixture: ComponentFixture<YaHousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaHousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaHousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
