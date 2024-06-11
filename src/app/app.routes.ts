import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutListComponent } from './workout-components/workout-list/workout-list.component';
import { WorkoutPageComponent } from './workout-components/workout-page/workout-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workout-list', component: WorkoutListComponent },
  { path: 'workout-list/:workoutName', component: WorkoutPageComponent },
];
