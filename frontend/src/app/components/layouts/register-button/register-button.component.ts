import { Component } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/index';

@Component({
  selector: 'register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.less']
})
export class RegisterButtonComponent {
  closeResult: string;

  constructor(private modalService: NgbModal, private apiService: ApiService) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  register(registerUsername, registerPassword, registerMail, registerName, registerSurname) {
    var user = { username: registerUsername, password: registerPassword, email: registerMail, name: registerName, surname: registerSurname };
    console.log(user);
    this.apiService.post('api/user',user).subscribe(res => { console.log(res); });
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