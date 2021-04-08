import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceListingComponent } from './experience-listing.component';

describe('ExperienceListingComponent', () => {
  let component: ExperienceListingComponent;
  let fixture: ComponentFixture<ExperienceListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
