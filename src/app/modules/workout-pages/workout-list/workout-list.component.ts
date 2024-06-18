import { Component, Input, ViewChild } from '@angular/core';
import { ListCardComponent } from '../shared/list-card/list-card.component';
import { Paginator, PaginatorModule } from 'primeng/paginator';
import { WorkoutsService } from '../../../services/workouts.service';
import { Workout, Workouts } from '../../../../types/workouts';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [ListCardComponent, PaginatorModule],
  templateUrl: './workout-list.component.html',
  styleUrl: './workout-list.component.css',
  // providers: [ListCardComponent]
})
export class WorkoutListComponent {
  constructor(private workoutsService: WorkoutsService) {}

  @ViewChild('paginator') paginator: Paginator | undefined;

  // @Input() workouts!: Workouts;
  workouts: Workout[] = [];

  totalRecords: number = 0;
  rows: number = 5;

  onPageChange(event: any) {
    this.fetchWorkouts(event.page, event.rows);
  }

  fetchWorkouts(page: number, perPage: number) {
    this.workoutsService.getWorkouts('', { page, perPage }).subscribe({
      next: (data: Workouts) => {
        this.workouts = data.items;
        this.totalRecords = data.total;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
