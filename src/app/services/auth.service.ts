import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // TODO: Default value to be 'false'

    private isLoggedInSource = new BehaviorSubject(true);
    isLoggedIn = this.isLoggedInSource.asObservable();

    constructor() {
    }

    loggedIn(isLoggedIn: boolean) {
        this.isLoggedInSource.next(isLoggedIn);
    }
}
