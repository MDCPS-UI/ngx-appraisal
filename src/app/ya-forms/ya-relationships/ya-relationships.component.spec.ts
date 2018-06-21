import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaRelationshipsComponent } from './ya-relationships.component';

describe('YaRelationshipsComponent', () => {
  let component: YaRelationshipsComponent;
  let fixture: ComponentFixture<YaRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
