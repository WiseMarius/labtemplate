import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import {Subscription} from 'rxjs/Subscription'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private data: LoginService) {

  }
  //{{user.name}} {{user.surname}}

  user: string;

  ngOnInit() {
    console.log("NGONINIT2")
    this.data.currentFullName.subscribe(user => {
      console.log(user);
      this.user = user;
      console.log(this.data.currentFullName);
    });
    console.log(this.user);
  }

}
interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  name:string;
  surname:string;
}

