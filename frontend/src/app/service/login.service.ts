import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class LoginService {
    constructor() { }

    fullNameSource = new BehaviorSubject<string>('default user');
    currentFullName = this.fullNameSource.asObservable();

    idSource= new BehaviorSubject<number>(-1);
    currentId=this.idSource.asObservable();

    changeUser(user: string, id:number) {
        console.log("CHANGEMESSAGE");
        this.fullNameSource.next(user)
        this.idSource.next(id);
        console.log(user);
        console.log(this.currentFullName);
    }
}