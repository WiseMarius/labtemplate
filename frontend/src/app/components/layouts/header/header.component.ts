import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../../../service/login.service'
import { Subscription } from 'rxjs/Subscription'
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { ApiService } from '../../../service/index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  constructor(private apiService: ApiService, private data: LoginService, private _cookieService:CookieService) {
    this.user={id:-1,username:"", password:"", email:"",
    name:"", surname:"", facebook:"", twitter:"", instagram:"", google:"", relationship:"", living:"",
    working:"", photo:"", primeUser:false
  }
  }

  //user: string;
  //id: number;
  private user:User;

  ngOnInit() {
    console.log("NGONINIT2")
    console.log(this.user);
    console.log('cooookieeeeeeee');
    console.log(this._cookieService.get('test'));
    var str=this._cookieService.get('test');
    var strList=str.split(" ");
    this.user.name=strList[0];
    this.user.surname=strList[1];
    this.user.id=Number(strList[2]);
    this.apiService.get('api/user/'+this.user.id).subscribe(user=>{
          this.user=user;
    });
  }

}
interface User {
    id:number; 
    username:string;
    password:string;
    email:string;
    name:string;
    surname:string;
    facebook:string;
    twitter:string;
    instagram:string;
    google:string;
    relationship:string;
    living:string;
    working:string;
    photo:string;
    primeUser:boolean;
}

