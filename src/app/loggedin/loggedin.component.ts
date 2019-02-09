import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
declare let jQuery: any;

@Component({
    selector: 'app-loggedin',
    templateUrl: './loggedin.component.html',
    styleUrls: ['./loggedin.component.styl']
})
export class LoggedinComponent implements OnInit, AfterViewInit {

    public user = {
        name: 'Anna',
        tasks: [1, 2, 3],
        showing: 'today',
    };

    constructor(
        private auth: AuthService,
        private elementRef: ElementRef,
        private taskService: TasksService,
    ) {
    }

    ngOnInit() {
        this.user.tasks = this.taskService.getTasks();
    }

    ngAfterViewInit() {
        jQuery(this.elementRef.nativeElement.querySelector('.dropdown')).dropdown();
    }

    setShowing(what: string) {
        this.user.showing = what;
    }

    newTask() {
        console.log('new Task');
    }
}
