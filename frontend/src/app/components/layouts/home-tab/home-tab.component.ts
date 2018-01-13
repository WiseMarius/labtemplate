import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/index';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.less']
})
export class HomeTabComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  statuses: Status[];

  ngOnInit() { 
       this.apiService.get('api/status/users/all').subscribe(res => {
      //this.statusUsers=JSON.parse(JSON.stringify(res));
      this.statuses = res;
      console.log(this.statuses);
      console.log(this.statuses.length);
    });
  }

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
