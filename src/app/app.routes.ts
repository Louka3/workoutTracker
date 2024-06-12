import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutListComponent } from './workout-components/workout-list/workout-list.component';
import { WorkoutPageComponent } from './workout-components/workout-page/workout-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'workout-list',
    loadChildren: () =>
      import('./modules/workout-pages/workout-pages.module').then(
        (m) => m.WorkoutPagesModule
      ),
  },
  // { path: 'workout-list', component: WorkoutListComponent },
  // { path: 'workout-list/:workoutName', component: WorkoutPageComponent },
];
