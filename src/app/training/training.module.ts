import { MaterialModule } from './../material.module';
import { TrainingService } from './training.service';
import { UIService } from './../shared/ui.service';
import { StopTrainingComponent } from './current-training/stop-training.component';
import { PastTrainingsComponent } from './past-trainings/past-trainings.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { TrainingComponent } from './training.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingsComponent,
    StopTrainingComponent
  ],
  imports: [MaterialModule],
  providers: [TrainingService, UIService],
  entryComponents: [StopTrainingComponent]
})
export class TrainingModule {

}
