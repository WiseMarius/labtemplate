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


  statusUsers: Status[];


  ngOnInit() {
    this.apiService.get('api/status/users/all').subscribe(res => {
      //this.statusUsers=JSON.parse(JSON.stringify(res));
      this.statusUsers = res;
      console.log(this.statusUsers);
      console.log(this.statusUsers.length);
    });
  }

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];

}

interface User {
  name: string;
  surname: string;

}
interface Status {
  status: string;
  rating: number;
  user: User;
};
