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
  name :any;
  isSearch : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=this.infos.username;
    this.name = localStorage.getItem("username");
    this.isUser();
    
  }
  UploadFile(){
    console.log("take file");
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
