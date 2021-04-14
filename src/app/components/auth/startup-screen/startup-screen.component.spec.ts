import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupScreenComponent } from './startup-screen.component';

describe('StartupScreenComponent', () => {
  let component: StartupScreenComponent;
  let fixture: ComponentFixture<StartupScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
