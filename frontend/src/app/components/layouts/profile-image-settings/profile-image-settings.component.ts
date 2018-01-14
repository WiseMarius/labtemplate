import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image-settings',
  templateUrl: './profile-image-settings.component.html',
  styleUrls: ['./profile-image-settings.component.less']
})
export class ProfileImageSettingsComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
