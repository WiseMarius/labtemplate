import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-moments-tab',
  templateUrl: './moments-tab.component.html',
  styleUrls: ['./moments-tab.component.less'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})
export class MomentsTabComponent implements OnInit {

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
  }

  ngOnInit() {
  }

}
