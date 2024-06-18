import { Component, Input } from '@angular/core';
import { TruncateNamePipe } from '../../../../pipes/truncate-name.pipe';
import { Workout } from '../../../../../types/workouts';

@Component({
  selector: 'app-list-card',
  standalone: true,
  imports: [TruncateNamePipe],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css',
})
export class ListCardComponent {
  @Input() workout!: Workout;
}
