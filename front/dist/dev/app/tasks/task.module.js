"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_component_1 = require("./task.component");
var task_routing_module_1 = require("./task-routing.module");
var shared_module_1 = require("../shared/shared.module");
var task_detail_component_1 = require("./task-detail.component");
var TaskModule = (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        core_1.NgModule({
            imports: [task_routing_module_1.TaskRoutingModule, shared_module_1.SharedModule],
            declarations: [task_component_1.TaskComponent, task_detail_component_1.TaskDetailComponent],
            exports: [task_component_1.TaskComponent, task_detail_component_1.TaskDetailComponent]
        })
    ], TaskModule);
    return TaskModule;
}());
exports.TaskModule = TaskModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90YXNrcy90YXNrLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QyxtREFBaUQ7QUFDakQsNkRBQTBEO0FBQzFELHlEQUF1RDtBQUN2RCxpRUFBOEQ7QUFPOUQ7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQUx0QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx1Q0FBaUIsRUFBRSw0QkFBWSxDQUFDO1lBQzFDLFlBQVksRUFBRSxDQUFDLDhCQUFhLEVBQUUsMkNBQW1CLENBQUM7WUFDbEQsT0FBTyxFQUFFLENBQUMsOEJBQWEsRUFBRSwyQ0FBbUIsQ0FBQztTQUM5QyxDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBM0IsQUFBMkIsSUFBQTtBQUFkLGdDQUFVIiwiZmlsZSI6ImFwcC90YXNrcy90YXNrLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYXNrQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYXNrUm91dGluZ01vZHVsZSB9IGZyb20gJy4vdGFzay1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBUYXNrRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi90YXNrLWRldGFpbC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbVGFza1JvdXRpbmdNb2R1bGUsIFNoYXJlZE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1Rhc2tDb21wb25lbnQsIFRhc2tEZXRhaWxDb21wb25lbnRdLFxuICBleHBvcnRzOiBbVGFza0NvbXBvbmVudCwgVGFza0RldGFpbENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGFza01vZHVsZSB7IH1cbiJdfQ==
