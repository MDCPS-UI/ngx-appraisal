import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaDocumentsComponent } from './ya-documents.component';

describe('YaDocumentsComponent', () => {
  let component: YaDocumentsComponent;
  let fixture: ComponentFixture<YaDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
