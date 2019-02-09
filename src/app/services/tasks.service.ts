import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TasksService {

    private tasks = [];

    constructor() {
        this.tasks = this.tasks.concat([
            {
                title: 'Assets Library',
                body: 'Summary baggade in university email, displayed incorrectly',
                priority: 'red',
                comments: [1, 2, 3, 4, 5, 6, 7],
                subTasks: [1, 2, 3],
                shared: [1, 2, 3, 4, 5],
            },
            {
                title: 'Replace news articles on home',
                body: 'The Times, The Evening Standard, Business Insiders, Yahoo News',
                priority: 'blue',
                comments: [],
                subTasks: [1, 2, 3, 4],
                shared: [1],
            },
            {
                title: 'Fix monthly value on search page',
                body: 'Please update the monthly value on search page',
                priority: 'blue',
                comments: [],
                subTasks: [1, 2, 3, 4, 5, 6],
                shared: [1],
            },
        ]);
    }

    public getTasks() {
        return this.tasks;
    }
}
