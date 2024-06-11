import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-workout-page',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css',
})
export class WorkoutPageComponent {}
