import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutPagesRoutingModule } from './workout-pages-routing.module';
import { WorkoutListComponent } from './workout-list/workout-list.component';
import { WorkoutPageComponent } from './shared/workout-page/workout-page.component';
import { ListCardComponent } from './shared/list-card/list-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkoutPagesRoutingModule,
    WorkoutListComponent,
    WorkoutPageComponent,
    ListCardComponent,
  ],
})
export class WorkoutPagesModule {}
