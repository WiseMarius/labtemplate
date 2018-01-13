import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.less']
})
export class UserProfileComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  ngOnInit() {

  }
}

