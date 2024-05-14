import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLayoutComponent } from './workout-layout.component';

describe('WorkoutLayoutComponent', () => {
  let component: WorkoutLayoutComponent;
  let fixture: ComponentFixture<WorkoutLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkoutLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
