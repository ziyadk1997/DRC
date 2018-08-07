import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-view-profile6',
  templateUrl: 'view-profile6.html'
})
export class ViewProfile6Page {
  infos: any = {};
  userName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=localStorage.getItem("username");
    console.log(this.infos);
  }
  UploadFile(){
    console.log("take file");
  }
}
