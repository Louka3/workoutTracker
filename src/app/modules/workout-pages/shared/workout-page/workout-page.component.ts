import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { Workout } from '../../../../../types/workouts';

@Component({
  selector: 'app-workout-page',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css',
})
export class WorkoutPageComponent {
  @Input() workout!: Workout;

  ngOnInit() {}
}
