import { Excersise } from './excersise.model';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class TrainingService {
  availableExcersise: Excersise [] = [
    {id: 'truong', name: 'Truonglv', duration: 34, calories: 8},
    {id: 'leve', name: 'leveTruonglv', duration: 3, calories: 54},
    {id: 'tutoe', name: 'tutoeTruonglv', duration: 766, calories: 86},
    {id: 'lengcheng', name: 'lengchengTruonglv', duration: 33, calories: 66}
  ];

  getExcersise(): Observable<Excersise []> {
    return of(this.availableExcersise);
  }
}
