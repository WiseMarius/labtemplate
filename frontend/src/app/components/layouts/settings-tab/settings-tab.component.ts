import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/index';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-settings-tab',
  templateUrl: './settings-tab.component.html',
  styleUrls: ['./settings-tab.component.less']
})
export class SettingsTabComponent implements OnInit {
  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;

  constructor(private apiService: ApiService, private _cookieService: CookieService) { }

  ngOnInit() {
  }

  photo: string = undefined;
  save(facebook, instagram, twitter, google, relationship, living, working) {
    console.log("save");
    var cookie = this._cookieService.get('test');
    var cookies = cookie.split(" ");
    var id = cookies[2];
    console.log(id);
    var photo = this.photo;
    if (facebook == "") {
      facebook = undefined;
    }
    if (instagram == "") {
      instagram = undefined;
    }
    if (twitter == "") {
      twitter = undefined;
    }
    if (google == "") {
      google = undefined;
    }
    if (relationship == "") {
      relationship = undefined;
    }
    if (living == "") {
      living = undefined;
    }
    if (working == "") {
      working = undefined;
    }

    var user = { facebook, instagram, twitter, google, relationship, living, working, photo }
    this.apiService.patch('api/user/' + id, user).subscribe(res => {
      console.log(res);
    })
  }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      var photo = myReader.result;
      console.log(photo);
      this.photo = photo;
    }
    myReader.readAsDataURL(file);
  }



}

interface User {
  facebook: string;
  instagram: string;
  twitter: string;
  google: string;
  relationship: string;
  living: string;
  working: string;
  photo: string;
}
