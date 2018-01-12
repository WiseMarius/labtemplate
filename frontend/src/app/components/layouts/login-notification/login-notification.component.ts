import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {debounceTime} from 'rxjs/operator/debounceTime';

@Component({
  selector: 'app-login-notification',
  templateUrl: './login-notification.component.html',
  styles: [`
    :host >>> .alert-custom {
      color: #000000;
      background-color: #bdffc2;
      border-color: #800040;
      position: fixed;
      bottom: 0;
      right: 0;
      margin: 25px;
      z-index: 2;
      width: 260px;
    }
  `]
})
export class LoginNotificationComponent implements OnInit
{
  private _success = new Subject<string>();

  staticAlertClosed = false;

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 5000);
  }
}