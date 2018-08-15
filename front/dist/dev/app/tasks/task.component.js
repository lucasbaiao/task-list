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
var task_list_service_1 = require("../shared/task-list/task-list.service");
var task_1 = require("./model/task");
var TaskComponent = (function () {
    function TaskComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.tasks = [];
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    TaskComponent.prototype.getNames = function () {
        var _this = this;
        this.selectedTask = undefined;
        this.nameListService.allTasks()
            .then(function (names) { return _this.tasks = names; }, function (error) { return _this.errorMessage = error; }).catch(function (err) { return _this.handleError(err); });
    };
    TaskComponent.prototype.addName = function () {
        this.selectedTask = new task_1.Task('', this.newName, '', 0, '', '', '');
    };
    TaskComponent.prototype.onSelect = function (task) {
        if (this.selectedTask) {
            this.selectedTask = undefined;
        }
        else {
            this.selectedTask = task;
        }
    };
    TaskComponent.prototype.taskChanged = function (event) {
        if (event === undefined) {
            this.getNames();
        }
        else {
            var index = this.tasks.findIndex(function (t) { return t.id == event.id; });
            if (index >= 0) {
                this.tasks[index] = event;
            }
            else {
                this.tasks.push(event);
            }
        }
    };
    TaskComponent.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message : error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        alert(errMsg);
    };
    TaskComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sd-task',
            templateUrl: 'task.component.html',
            styleUrls: ['task.component.css'],
        }),
        __metadata("design:paramtypes", [task_list_service_1.TaskListService])
    ], TaskComponent);
    return TaskComponent;
}());
exports.TaskComponent = TaskComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXNrcy90YXNrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUFrRDtBQUNsRCwyRUFBd0U7QUFDeEUscUNBQW9DO0FBU3BDO0lBT0UsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUxuRCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsVUFBSyxHQUFVLEVBQUUsQ0FBQztJQUdxQyxDQUFDO0lBRXhELGdDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO2FBQzVCLElBQUksQ0FDSCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixFQUMzQixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQVEsS0FBSyxFQUE5QixDQUE4QixDQUN4QyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxnQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNoQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztRQUNoQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFXO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1lBQzFELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFTyxtQ0FBVyxHQUFuQixVQUFvQixLQUFVO1FBQzVCLElBQU0sTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBSSxLQUFLLENBQUMsTUFBTSxXQUFNLEtBQUssQ0FBQyxVQUFZLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQztRQUN6SCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBbkRVLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ2xDLENBQUM7eUNBUW9DLG1DQUFlO09BUHhDLGFBQWEsQ0FxRHpCO0lBQUQsb0JBQUM7Q0FyREQsQUFxREMsSUFBQTtBQXJEWSxzQ0FBYSIsImZpbGUiOiJhcHAvdGFza3MvdGFzay5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGFza0xpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3Rhc2stbGlzdC90YXNrLWxpc3Quc2VydmljZSc7XG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9tb2RlbC90YXNrJztcbmltcG9ydCB7IFNlbGVjdENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc2QtdGFzaycsXG4gIHRlbXBsYXRlVXJsOiAndGFzay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YXNrLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFza0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgbmV3TmFtZSA9ICcnO1xuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcbiAgdGFza3M6IGFueVtdID0gW107XG4gIHNlbGVjdGVkVGFzazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IFRhc2tMaXN0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5nZXROYW1lcygpO1xuICB9XG5cbiAgZ2V0TmFtZXMoKSB7XG4gICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuYWxsVGFza3MoKVxuICAgICAgLnRoZW4oXG4gICAgICAgIG5hbWVzID0+IHRoaXMudGFza3MgPSBuYW1lcyxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXG4gICAgICApLmNhdGNoKGVyciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycikpO1xuICB9XG5cbiAgYWRkTmFtZSgpIHtcbiAgICB0aGlzLnNlbGVjdGVkVGFzayA9IG5ldyBUYXNrKCcnLCB0aGlzLm5ld05hbWUsICcnLCAwLCAnJywgJycsICcnKTtcbiAgfVxuXG4gIG9uU2VsZWN0KHRhc2s6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVGFzaykge1xuICAgICAgdGhpcy5zZWxlY3RlZFRhc2sgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYXNrID0gdGFzaztcbiAgICB9XG4gIH1cblxuICB0YXNrQ2hhbmdlZChldmVudDogVGFzaykge1xuICAgIGlmIChldmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmdldE5hbWVzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy50YXNrcy5maW5kSW5kZXgodCA9PiB0LmlkID09IGV2ZW50LmlkKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHRoaXMudGFza3NbaW5kZXhdID0gZXZlbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2goZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgIGNvbnN0IGVyck1zZyA9IChlcnJvci5tZXNzYWdlKSA/IGVycm9yLm1lc3NhZ2UgOiBlcnJvci5zdGF0dXMgPyBgJHtlcnJvci5zdGF0dXN9IC0gJHtlcnJvci5zdGF0dXNUZXh0fWAgOiAnU2VydmVyIGVycm9yJztcbiAgICBjb25zb2xlLmVycm9yKGVyck1zZyk7IC8vIGxvZyB0byBjb25zb2xlIGluc3RlYWRcbiAgICBhbGVydChlcnJNc2cpO1xuICB9XG5cbn1cbiJdfQ==
