import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../../service/index';

@Component({
  selector: 'app-moments-tab',
  templateUrl: './moments-tab.component.html',
  styleUrls: ['./moments-tab.component.less'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MomentsTabComponent implements OnInit {

  constructor(config: NgbCarouselConfig, private apiService: ApiService) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
  }

  photos: Photo[]=[];

  ngOnInit() {
this.apiService.get('api/photo/users/all').subscribe(res => {
      for (var i=0;i<res.length;i++)
      {
        console.log(res[i]);
        this.photos.push(res[i]);
      }
      console.log(this.photos);
    });
  }

}

interface Photo {
  photo: string;
  name: string;
  surname: string;
  rating: number;
}
