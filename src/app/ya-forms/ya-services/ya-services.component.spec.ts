import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaServicesComponent } from './ya-services.component';

describe('YaServicesComponent', () => {
  let component: YaServicesComponent;
  let fixture: ComponentFixture<YaServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
