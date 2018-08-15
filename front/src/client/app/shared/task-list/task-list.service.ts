import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Config } from '../config/env.config';
import { Task } from '../../tasks/model/task';
import { timingSafeEqual } from 'crypto';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable({ providedIn: 'root' })
export class TaskListService {

    private _path = Config.API + '/api/tasks/';

    constructor(private http: HttpClient) { }

    public allTasks(): Promise<Task[]> {
        return this.doGet('');
    }

    public getTask(id: string): Promise<Task[]> {
        return this.doGet(id);
    }

    public markCompleted(task: Task): Promise<Task> {
        return this.doPost(task, task.id + '/completed');
    }

    public markPending(task: Task): Promise<Task> {
        return this.doPost(task, task.id + '/pending');
    }

    public updateTask(task: Task): Promise<Task> {
        return this.doPut(task, task.id);
    }

    public createTask(task: Task): Promise<Task> {
        return this.doPost(task, '');
    }

    public deleteTask(task: Task): Promise<Task> {
        const headers = new HttpHeaders();
        this.contentTypeApplicationJson(headers);

        return this.http.delete(this._path + task.id, { headers: headers })
            .toPromise()
            .then((response: any) => response as Task);
    }

    private doGet<T>(method: string): Promise<T> {
        const headers = new HttpHeaders();
        this.contentTypeApplicationJson(headers);
        return this.http.get(this._path + method, { headers: headers })
            .toPromise()
            .then((response: any) => response as T);
    }

    private doPut<T>(object: T, method: string): Promise<T> {
        const headers = new HttpHeaders();
        this.contentTypeApplicationJson(headers);

        return this.http.put(this._path + method, object, { headers: headers })
            .toPromise()
            .then((response: any) => response as T);
    }

    private doPost<T>(object: T, method: string): Promise<any> {
        const headers = new HttpHeaders();
        this.contentTypeApplicationJson(headers);

        return this.http.post(this._path + method, object, { headers: headers })
            .toPromise()
            .then((response: any) => response as T);
    }

    private contentTypeApplicationJson(headers: HttpHeaders) {
        headers.append('Content-Type', 'application/json');
    }
}
