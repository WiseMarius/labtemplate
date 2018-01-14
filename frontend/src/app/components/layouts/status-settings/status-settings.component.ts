import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-settings',
  templateUrl: './status-settings.component.html',
  styleUrls: ['./status-settings.component.less']
})
export class StatusSettingsComponent implements OnInit {
  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
