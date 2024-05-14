import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsPagesComponent } from './workouts-pages.component';

describe('WorkoutsPagesComponent', () => {
  let component: WorkoutsPagesComponent;
  let fixture: ComponentFixture<WorkoutsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutsPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
