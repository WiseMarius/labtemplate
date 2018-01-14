import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import { Subscription } from 'rxjs/Subscription'
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private data: LoginService, private _cookieService:CookieService) {

  }

  user: string;
  id: number;

  ngOnInit() {
    console.log("NGONINIT2")
    this.data.currentFullName.subscribe(user => {
      console.log(user);
      this.user = user;
      console.log(this.data.currentFullName);
    });
    this.data.currentId.subscribe(id => { this.id = id; })
    console.log(this.user);
    console.log('cooookieeeeeeee');
    console.log(this._cookieService.get('test'));
    var str=this._cookieService.get('test');
    var strList=str.split(" ");
    this.user=strList[0]+' '+strList[1];
    this.id=Number(strList[2]);
  }

}
interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  name: string;
  surname: string;
}

