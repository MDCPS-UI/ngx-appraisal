import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YaReviewComponent } from './ya-review.component';

describe('YaReviewComponent', () => {
  let component: YaReviewComponent;
  let fixture: ComponentFixture<YaReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YaReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YaReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
