"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_1 = require("./model/task");
var task_list_service_1 = require("../shared/task-list/task-list.service");
var TaskDetailComponent = (function () {
    function TaskDetailComponent(taskService) {
        this.taskService = taskService;
        this.toggledChange = new core_1.EventEmitter();
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
        console.log('init');
    };
    TaskDetailComponent.prototype.checkValue = function (event) {
        var _this = this;
        this.isLoading = true;
        if (this.task.status == 0) {
            this.taskService.markCompleted(this.task)
                .then(function (task) { return _this.task = task; })
                .then(function () { return _this.toggledChange.emit(_this.task); })
                .then(function () { return _this.isLoading = false; })
                .catch(function (err) { return _this.handleError(err); });
        }
        else {
            this.taskService.markPending(this.task)
                .then(function (task) { return _this.task = task; })
                .then(function () { return _this.toggledChange.emit(_this.task); })
                .then(function () { return _this.isLoading = false; })
                .catch(function (err) { return _this.handleError(err); });
        }
    };
    TaskDetailComponent.prototype.deleteTask = function () {
        var _this = this;
        this.isLoading = true;
        this.taskService.deleteTask(this.task)
            .then(function (task) { return _this.task = task; })
            .then(function () { return _this.toggledChange.emit(undefined); })
            .then(function () { return _this.isLoading = false; })
            .catch(function (err) { return _this.handleError(err); });
    };
    TaskDetailComponent.prototype.updateTask = function () {
        var _this = this;
        this.isLoading = true;
        if (this.task.id == '') {
            this.taskService.createTask(this.task)
                .then(function (task) { return _this.task = task; })
                .then(function () { return _this.toggledChange.emit(_this.task); })
                .then(function () { return _this.isLoading = false; })
                .catch(function (err) { return _this.handleError(err); });
        }
        else {
            this.taskService.updateTask(this.task)
                .then(function (task) { return _this.task = task; })
                .then(function () { return _this.toggledChange.emit(_this.task); })
                .then(function () { return _this.isLoading = false; })
                .catch(function (err) { return _this.handleError(err); });
        }
    };
    TaskDetailComponent.prototype.handleError = function (error) {
        this.isLoading = false;
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        alert(errMsg);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", task_1.Task)
    ], TaskDetailComponent.prototype, "task", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TaskDetailComponent.prototype, "toggledChange", void 0);
    TaskDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-task-detail',
            templateUrl: 'task-detail.component.html',
        }),
        __metadata("design:paramtypes", [task_list_service_1.TaskListService])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());
exports.TaskDetailComponent = TaskDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXNrcy90YXNrLWRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxzQ0FBK0U7QUFDL0UscUNBQW9DO0FBQ3BDLDJFQUF3RTtBQU94RTtJQU9JLDZCQUFtQixXQUE0QjtRQUE1QixnQkFBVyxHQUFYLFdBQVcsQ0FBaUI7UUFKckMsa0JBQWEsR0FBdUIsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFLdkUsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3Q0FBVSxHQUFWLFVBQVcsS0FBVTtRQUFyQixpQkFlQztRQWRHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDcEMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLEVBQWhCLENBQWdCLENBQUM7aUJBQzlCLElBQUksQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO2lCQUM5QyxJQUFJLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUF0QixDQUFzQixDQUFDO2lCQUNsQyxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMs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QUFVO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBSSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN6SCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBNURRO1FBQVIsWUFBSyxFQUFFO2tDQUFPLFdBQUk7cURBQUM7SUFDVjtRQUFULGFBQU0sRUFBRTtrQ0FBZ0IsbUJBQVk7OERBQWtDO0lBSDlELG1CQUFtQjtRQUwvQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDRCQUE0QjtTQUM1QyxDQUFDO3lDQVFrQyxtQ0FBZTtPQVB0QyxtQkFBbUIsQ0ErRC9CO0lBQUQsMEJBQUM7Q0EvREQsQUErREMsSUFBQTtBQS9EWSxrREFBbUIiLCJmaWxlIjoiYXBwL3Rhc2tzL3Rhc2stZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTphbmd1bGFyLXdoaXRlc3BhY2VcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuL21vZGVsL3Rhc2snO1xuaW1wb3J0IHsgVGFza0xpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Rhc2stbGlzdC90YXNrLWxpc3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdzZC10YXNrLWRldGFpbCcsXG4gICAgdGVtcGxhdGVVcmw6ICd0YXNrLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhc2tEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgdGFzazogVGFzaztcbiAgICBAT3V0cHV0KCkgdG9nZ2xlZENoYW5nZTogRXZlbnRFbWl0dGVyPFRhc2s+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYXNrPigpO1xuXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHRhc2tTZXJ2aWNlOiBUYXNrTGlzdFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQnKTtcbiAgICB9XG5cbiAgICBjaGVja1ZhbHVlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy50YXNrLnN0YXR1cyA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLm1hcmtDb21wbGV0ZWQodGhpcy50YXNrKVxuICAgICAgICAgICAgICAgIC50aGVuKHRhc2sgPT4gdGhpcy50YXNrID0gdGFzaylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnRvZ2dsZWRDaGFuZ2UuZW1pdCh0aGlzLnRhc2spKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuaXNMb2FkaW5nID0gZmFsc2UpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrU2VydmljZS5tYXJrUGVuZGluZyh0aGlzLnRhc2spXG4gICAgICAgICAgICAgICAgLnRoZW4odGFzayA9PiB0aGlzLnRhc2sgPSB0YXNrKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMudG9nZ2xlZENoYW5nZS5lbWl0KHRoaXMudGFzaykpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWxldGVUYXNrKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMudGFza1NlcnZpY2UuZGVsZXRlVGFzayh0aGlzLnRhc2spXG4gICAgICAgICAgICAudGhlbih0YXNrID0+IHRoaXMudGFzayA9IHRhc2spXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnRvZ2dsZWRDaGFuZ2UuZW1pdCh1bmRlZmluZWQpKVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnIpKTtcbiAgICB9XG5cbiAgICB1cGRhdGVUYXNrKCkge1xuICAgICAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnRhc2suaWQgPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudGFza1NlcnZpY2UuY3JlYXRlVGFzayh0aGlzLnRhc2spXG4gICAgICAgICAgICAgICAgLnRoZW4odGFzayA9PiB0aGlzLnRhc2sgPSB0YXNrKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMudG9nZ2xlZENoYW5nZS5lbWl0KHRoaXMudGFzaykpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhc2tTZXJ2aWNlLnVwZGF0ZVRhc2sodGhpcy50YXNrKVxuICAgICAgICAgICAgICAgIC50aGVuKHRhc2sgPT4gdGhpcy50YXNrID0gdGFzaylcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnRvZ2dsZWRDaGFuZ2UuZW1pdCh0aGlzLnRhc2spKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuaXNMb2FkaW5nID0gZmFsc2UpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogYW55KSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJNc2cpOyAvLyBsb2cgdG8gY29uc29sZSBpbnN0ZWFkXG4gICAgICAgIGFsZXJ0KGVyck1zZyk7XG4gICAgfVxufVxuIl19
