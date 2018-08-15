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
var http_1 = require("@angular/common/http");
var env_config_1 = require("../config/env.config");
var TaskListService = (function () {
    function TaskListService(http) {
        this.http = http;
        this._path = env_config_1.Config.API + '/api/tasks/';
    }
    TaskListService.prototype.allTasks = function () {
        return this.doGet('');
    };
    TaskListService.prototype.getTask = function (id) {
        return this.doGet(id);
    };
    TaskListService.prototype.markCompleted = function (task) {
        return this.doPost(task, task.id + '/completed');
    };
    TaskListService.prototype.markPending = function (task) {
        return this.doPost(task, task.id + '/pending');
    };
    TaskListService.prototype.updateTask = function (task) {
        return this.doPut(task, task.id);
    };
    TaskListService.prototype.createTask = function (task) {
        return this.doPost(task, '');
    };
    TaskListService.prototype.deleteTask = function (task) {
        var headers = new http_1.HttpHeaders();
        this.contentTypeApplicationJson(headers);
        return this.http.delete(this._path + task.id, { headers: headers })
            .toPromise()
            .then(function (response) { return response; });
    };
    TaskListService.prototype.doGet = function (method) {
        var headers = new http_1.HttpHeaders();
        this.contentTypeApplicationJson(headers);
        return this.http.get(this._path + method, { headers: headers })
            .toPromise()
            .then(function (response) { return response; });
    };
    TaskListService.prototype.doPut = function (object, method) {
        var headers = new http_1.HttpHeaders();
        this.contentTypeApplicationJson(headers);
        return this.http.put(this._path + method, object, { headers: headers })
            .toPromise()
            .then(function (response) { return response; });
    };
    TaskListService.prototype.doPost = function (object, method) {
        var headers = new http_1.HttpHeaders();
        this.contentTypeApplicationJson(headers);
        return this.http.post(this._path + method, object, { headers: headers })
            .toPromise()
            .then(function (response) { return response; });
    };
    TaskListService.prototype.contentTypeApplicationJson = function (headers) {
        headers.append('Content-Type', 'application/json');
    };
    TaskListService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TaskListService);
    return TaskListService;
}());
exports.TaskListService = TaskListService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdGFzay1saXN0L3Rhc2stbGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCxtREFBOEM7QUFROUM7SUFJSSx5QkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUY1QixVQUFLLEdBQUcsbUJBQU0sQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBRUgsQ0FBQztJQUVsQyxrQ0FBUSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxFQUFVO1FBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFTSx1Q0FBYSxHQUFwQixVQUFxQixJQUFVO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFTSxxQ0FBVyxHQUFsQixVQUFtQixJQUFVO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLElBQVU7UUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixJQUFVO1FBQ3hCLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQzlELFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLFFBQWEsSUFBSyxPQUFBLFFBQWdCLEVBQWhCLENBQWdCLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU8sK0JBQUssR0FBYixVQUFpQixNQUFjO1FBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDMUQsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsUUFBYSxJQUFLLE9BQUEsUUFBYSxFQUFiLENBQWEsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTywrQkFBSyxHQUFiLFVBQWlCLE1BQVMsRUFBRSxNQUFjO1FBQ3RDLElBQU0sT0FBTyxHQUFHLElBQUksa0JBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ2xFLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxVQUFDLFFBQWEsSUFBSyxPQUFBLFFBQWEsRUFBYixDQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU8sZ0NBQU0sR0FBZCxVQUFrQixNQUFTLEVBQUUsTUFBYztRQUN2QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGtCQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNuRSxTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsVUFBQyxRQUFhLElBQUssT0FBQSxRQUFhLEVBQWIsQ0FBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLG9EQUEwQixHQUFsQyxVQUFtQyxPQUFvQjtRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFuRVEsZUFBZTtRQUQzQixpQkFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO3lDQUtMLGlCQUFVO09BSjNCLGVBQWUsQ0FvRTNCO0lBQUQsc0JBQUM7Q0FwRUQsQUFvRUMsSUFBQTtBQXBFWSwwQ0FBZSIsImZpbGUiOiJhcHAvc2hhcmVkL3Rhc2stbGlzdC90YXNrLWxpc3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9lbnYuY29uZmlnJztcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi8uLi90YXNrcy9tb2RlbC90YXNrJztcbmltcG9ydCB7IHRpbWluZ1NhZmVFcXVhbCB9IGZyb20gJ2NyeXB0byc7XG5cbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyB0aGUgTmFtZUxpc3Qgc2VydmljZSB3aXRoIG1ldGhvZHMgdG8gcmVhZCBuYW1lcyBhbmQgYWRkIG5hbWVzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFRhc2tMaXN0U2VydmljZSB7XG5cbiAgICBwcml2YXRlIF9wYXRoID0gQ29uZmlnLkFQSSArICcvYXBpL3Rhc2tzLyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgcHVibGljIGFsbFRhc2tzKCk6IFByb21pc2U8VGFza1tdPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvR2V0KCcnKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0VGFzayhpZDogc3RyaW5nKTogUHJvbWlzZTxUYXNrW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9HZXQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrQ29tcGxldGVkKHRhc2s6IFRhc2spOiBQcm9taXNlPFRhc2s+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9Qb3N0KHRhc2ssIHRhc2suaWQgKyAnL2NvbXBsZXRlZCcpO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYXJrUGVuZGluZyh0YXNrOiBUYXNrKTogUHJvbWlzZTxUYXNrPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvUG9zdCh0YXNrLCB0YXNrLmlkICsgJy9wZW5kaW5nJyk7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZVRhc2sodGFzazogVGFzayk6IFByb21pc2U8VGFzaz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kb1B1dCh0YXNrLCB0YXNrLmlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVGFzayh0YXNrOiBUYXNrKTogUHJvbWlzZTxUYXNrPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvUG9zdCh0YXNrLCAnJyk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZVRhc2sodGFzazogVGFzayk6IFByb21pc2U8VGFzaz4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIHRoaXMuY29udGVudFR5cGVBcHBsaWNhdGlvbkpzb24oaGVhZGVycyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5fcGF0aCArIHRhc2suaWQsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UgYXMgVGFzayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb0dldDxUPihtZXRob2Q6IHN0cmluZyk6IFByb21pc2U8VD4ge1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCk7XG4gICAgICAgIHRoaXMuY29udGVudFR5cGVBcHBsaWNhdGlvbkpzb24oaGVhZGVycyk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuX3BhdGggKyBtZXRob2QsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UgYXMgVCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1B1dDxUPihvYmplY3Q6IFQsIG1ldGhvZDogc3RyaW5nKTogUHJvbWlzZTxUPiB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZUFwcGxpY2F0aW9uSnNvbihoZWFkZXJzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLl9wYXRoICsgbWV0aG9kLCBvYmplY3QsIHsgaGVhZGVyczogaGVhZGVycyB9KVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2U6IGFueSkgPT4gcmVzcG9uc2UgYXMgVCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkb1Bvc3Q8VD4ob2JqZWN0OiBULCBtZXRob2Q6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICAgICAgdGhpcy5jb250ZW50VHlwZUFwcGxpY2F0aW9uSnNvbihoZWFkZXJzKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5fcGF0aCArIG1ldGhvZCwgb2JqZWN0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBhbnkpID0+IHJlc3BvbnNlIGFzIFQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY29udGVudFR5cGVBcHBsaWNhdGlvbkpzb24oaGVhZGVyczogSHR0cEhlYWRlcnMpIHtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgfVxufVxuIl19
