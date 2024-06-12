import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutPageComponent } from './shared/workout-page/workout-page.component';

const routes: Routes = [
  {
    path: '',
    component: WorkoutListComponent,
  },
  {
    path: ':workoutName',
    component: WorkoutPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutPagesRoutingModule {}
