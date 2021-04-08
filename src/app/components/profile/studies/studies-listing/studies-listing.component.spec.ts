import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesListingComponent } from './studies-listing.component';

describe('StudiesListingComponent', () => {
  let component: StudiesListingComponent;
  let fixture: ComponentFixture<StudiesListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
