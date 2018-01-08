import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/index';
import { ButtonModule } from 'primeng/primeng'
import { InputTextModule } from 'primeng/primeng'
import { PasswordModule } from 'primeng/primeng';
import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  loginDialog: boolean = false;

  showLoginDialog() {
    this.loginDialog = true;
  }

  loginUser(username, password) {
    var user = { username, password };
    //console.log(JSON.stringify(user));
    try {
      this.apiService.get('api/user/username_password/' + user.username + '&' + user.password).subscribe(res => {
        this.showLoginDialog();
      });
    }
    catch (e) {
    }
  }


  ngOnInit() {
  }

  registerUser(username, password, email, name, surname) {
    //var user={username:username, password:password, email:email, name:name, surname:surname}
    //console.log("SUNT IN REGISTER USER");
    //console.log(x);
    //var s=JSON.stringify(x);
    //console.log(s);
    var user = { username, password, email, name, surname };
    this.apiService.post('api/user/', user).subscribe(res => {
      console.log(res);
    });
  }

}
