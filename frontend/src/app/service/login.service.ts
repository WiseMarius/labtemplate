import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class LoginService {
    constructor() { }

    fullNameSource = new BehaviorSubject<string>('default user');
    currentFullName = this.fullNameSource.asObservable();

    changeMessage(user: string) {
        console.log("CHANGEMESSAGE");
        this.fullNameSource.next(user)
        console.log(user);
        console.log(this.currentFullName);
    }
}