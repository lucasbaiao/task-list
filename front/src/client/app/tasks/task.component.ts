import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../shared/task-list/task-list.service';
import { Task } from './model/task';
import { SelectControlValueAccessor } from '../../../../node_modules/@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'sd-task',
  templateUrl: 'task.component.html',
  styleUrls: ['task.component.css'],
})
export class TaskComponent implements OnInit {

  newName = '';
  errorMessage: string;
  tasks: any[] = [];
  selectedTask: any;

  constructor(public nameListService: TaskListService) { }

  ngOnInit() {
    this.getNames();
  }

  getNames() {
    this.selectedTask = undefined;
    this.nameListService.allTasks()
      .then(
        names => this.tasks = names,
        error => this.errorMessage = <any>error
      ).catch(err => this.handleError(err));
  }

  addName() {
    this.selectedTask = new Task('', this.newName, '', 0, '', '', '');
  }

  onSelect(task: any): void {
    if (this.selectedTask) {
      this.selectedTask = undefined;
    } else {
      this.selectedTask = task;
    }
  }

  taskChanged(event: Task) {
    if (event === undefined) {
      this.getNames();
    } else {
      const index = this.tasks.findIndex(t => t.id == event.id);
      if (index >= 0) {
        this.tasks[index] = event;
      } else {
        this.tasks.push(event);
      }
    }
  }

  private handleError(error: any) {
    const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    alert(errMsg);
  }

}
