// tslint:disable-next-line:angular-whitespace
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './model/task';
import { TaskListService } from '../shared/task-list/task-list.service';

@Component({
    moduleId: module.id,
    selector: 'sd-task-detail',
    templateUrl: 'task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {

    @Input() task: Task;
    @Output() toggledChange: EventEmitter<Task> = new EventEmitter<Task>();

    isLoading: boolean;

    constructor(public taskService: TaskListService) {
    }

    ngOnInit() {
        console.log('init');
    }

    checkValue(event: any) {
        this.isLoading = true;
        if (this.task.status == 0) {
            this.taskService.markCompleted(this.task)
                .then(task => this.task = task)
                .then(() => this.toggledChange.emit(this.task))
                .then(() => this.isLoading = false)
                .catch(err => this.handleError(err));
        } else {
            this.taskService.markPending(this.task)
                .then(task => this.task = task)
                .then(() => this.toggledChange.emit(this.task))
                .then(() => this.isLoading = false)
                .catch(err => this.handleError(err));
        }
    }

    deleteTask() {
        this.isLoading = true;
        this.taskService.deleteTask(this.task)
            .then(task => this.task = task)
            .then(() => this.toggledChange.emit(undefined))
            .then(() => this.isLoading = false)
            .catch(err => this.handleError(err));
    }

    updateTask() {
        this.isLoading = true;
        if (this.task.id == '') {
            this.taskService.createTask(this.task)
                .then(task => this.task = task)
                .then(() => this.toggledChange.emit(this.task))
                .then(() => this.isLoading = false)
                .catch(err => this.handleError(err));
        } else {
            this.taskService.updateTask(this.task)
                .then(task => this.task = task)
                .then(() => this.toggledChange.emit(this.task))
                .then(() => this.isLoading = false)
                .catch(err => this.handleError(err));
        }
    }

    private handleError(error: any) {
        this.isLoading = false;
        const errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        alert(errMsg);
    }
}
