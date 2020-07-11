import { Excersise } from './../excersise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { DestroyAble } from '../../common/DestroyAble';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent extends DestroyAble implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  availableExcersise: Excersise [];

  constructor(private trainingService: TrainingService) {
    super();
  }

  ngOnInit() {
    this.trainingService.getExcersise().pipe(
      takeUntil(this.destroyAble$)
    ).subscribe(data => {
      this.availableExcersise = data;
    });
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
