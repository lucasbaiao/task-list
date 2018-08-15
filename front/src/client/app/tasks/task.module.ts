import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TaskDetailComponent } from './task-detail.component';

@NgModule({
  imports: [TaskRoutingModule, SharedModule],
  declarations: [TaskComponent, TaskDetailComponent],
  exports: [TaskComponent, TaskDetailComponent]
})
export class TaskModule { }
