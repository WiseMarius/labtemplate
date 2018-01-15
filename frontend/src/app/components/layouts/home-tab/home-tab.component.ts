import { Component, OnInit, Output } from '@angular/core';
import { ApiService, LoginService } from '../../../service/index';
import { AngularFilePickerModule } from 'angular-file-picker';
import { FilePickerDirective } from 'angular-file-picker/file-picker.directive';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.component.html',
  styleUrls: ['./home-tab.component.less']
})
export class HomeTabComponent implements OnInit {

  constructor(private _cookieService:CookieService, private apiService: ApiService, private login: LoginService) { }

  statuses: Status[];

  id: number;

  getStatuses() {
    this.apiService.get('api/status/users/all').subscribe(res => {
      //this.statusUsers=JSON.parse(JSON.stringify(res));
      this.statuses = res;
      console.log(this.statuses);
      console.log(this.statuses.length);
    });
  }

  ngOnInit() {
    this.getStatuses();
    this.login.currentId.subscribe(id => { this.id = id; });
    console.log('aaaaaaaa' + this.id);

    var str=this._cookieService.get('test');
    var strs=str.split(" ");
    this.id=Number(strs[2]);
  }

  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      var photo= myReader.result;
      console.log(photo);
      this.uploadPhoto(photo);
    }
    myReader.readAsDataURL(file);
  }

  uploadPhoto(photo) {
    console.log("upload");
    var upPhoto = { photo: photo, rating: 0, uid: this.id };
    this.apiService.post('api/photo',upPhoto).subscribe(res=>{console.log(res);});
  }
  uploadStatus(textArea) {
    console.log("status");
    var status = { status: textArea, rating: 0, uid: this.id };
    console.log(status);
    this.apiService.post('api/status', status).subscribe(res => { console.log(res); });
    this.getStatuses();
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


interface PickedFile {
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  dataURL: string;
}