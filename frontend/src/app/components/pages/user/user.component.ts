import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/index';
import {ButtonModule} from 'primeng/primeng'
import {InputTextModule} from 'primeng/primeng'
import {PasswordModule} from 'primeng/primeng';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  onClick()
  {

  }

}
  interface User{
    username: string, 
    password: string, 
    email: string, 
    name: string, 
    surname: string    
  }
