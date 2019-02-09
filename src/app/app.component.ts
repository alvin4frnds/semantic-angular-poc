import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit{
    isLoggedIn = true;

    constructor(private auth: AuthService) {

    }

    ngOnInit(): void {
        this.auth.isLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
    }
}
