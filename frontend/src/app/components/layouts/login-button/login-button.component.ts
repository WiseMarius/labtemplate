import { Component, NgModule, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../service/index';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component'

import { Location } from '@angular/common'
import { LoginService } from '../../../service/login.service'
import { Subscription } from 'rxjs/Subscription'


@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less'],
})
export class LoginButtonComponent implements OnInit {
  closeResult: string;

  name: string;
  constructor(private apiService: ApiService, private modalService: NgbModal, private route: Router, private data: LoginService) {

  }
  ngOnInit() {
    console.log("NGONINIT");
    this.data.currentFullName.subscribe(user => {
      this.name = user;
    });
  }


  login(loginUsername, loginPassword) {
    this.apiService.get('api/user/username_password/' + loginUsername + '&' + loginPassword).subscribe(res => {
      console.log("LOGIN");
     console.log(res);
      this.name = res.name+ ' '+ res.surname;
      console.log(this.name);
      this.data.changeMessage(this.name);
      if (res != '404')
        this.route.navigateByUrl('/user-profile');
      console.log("haha");
    });
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });


  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
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

