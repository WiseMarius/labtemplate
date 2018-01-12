import { Component } from '@angular/core';
import { ApiService } from '../../../service/index';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Router, RouterModule } from '@angular/router';

import { Location } from '@angular/common'

@Component({
  selector: 'login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less']
})
export class LoginButtonComponent {
  closeResult: string;


  constructor(private apiService: ApiService, private modalService: NgbModal, private route: Router) { }


  login(loginUsername, loginPassword) {
    this.apiService.get('api/user/username_password/' + loginUsername + '&' + loginPassword).subscribe(res => {
      console.log(res);
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