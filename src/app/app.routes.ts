import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
];
