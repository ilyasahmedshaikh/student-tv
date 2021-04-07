import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesTakenComponent } from './courses-taken.component';

describe('CoursesTakenComponent', () => {
  let component: CoursesTakenComponent;
  let fixture: ComponentFixture<CoursesTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
