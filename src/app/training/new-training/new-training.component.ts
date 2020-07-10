import { Excersise } from './../excersise.model';
import { TrainingService } from './../training.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  availableExcersise: Excersise [];

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.trainingService.getExcersise().subscribe(data => {
      this.availableExcersise = data;
    });
  }

  onStartTraining() {
    this.trainingStart.emit();
  }

}
