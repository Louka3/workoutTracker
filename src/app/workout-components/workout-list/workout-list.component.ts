import { Component } from '@angular/core';
import { ListCardComponent } from '../list-card/list-card.component';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [ListCardComponent],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
})
export class WorkoutListComponent {}
