import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesDetailsComponent } from './studies-details.component';

describe('StudiesDetailsComponent', () => {
  let component: StudiesDetailsComponent;
  let fixture: ComponentFixture<StudiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
