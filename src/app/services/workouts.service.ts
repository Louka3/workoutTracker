import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Workout, Workouts } from '../../types/workouts';
import { PaginationParams } from '../../types/shared';

@Injectable({
  providedIn: 'root',
})
export class WorkoutsService {
  constructor(private apiService: ApiService) {}
  getWorkouts = (
    url: string,
    params: PaginationParams
  ): Observable<Workouts> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  getWorkout = (url: string): Observable<Workout> => {
    return this.apiService.get(url, {});
  };
}
