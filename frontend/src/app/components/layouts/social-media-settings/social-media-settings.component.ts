import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-settings',
  templateUrl: './social-media-settings.component.html',
  styleUrls: ['./social-media-settings.component.less']
})
export class SocialMediaSettingsComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
