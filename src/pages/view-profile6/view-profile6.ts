import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services';


@Component({
  selector: 'page-view-profile6',
  templateUrl: 'view-profile6.html'
})
export class ViewProfile6Page {
  infos: any = {};
  userName:any;
  name :any;
  isSearch : boolean;
  IsHr : boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,private RequestBE :ServicesProvider) {
    this.infos = this.navParams.data;
    this.userName=this.infos.username;
    this.name = localStorage.getItem("username");
    this.isUser();
    this.SetHr();
    
  }
  UploadFile(){
    console.log("take file");
  }
  SetHr() {
    var username = localStorage.getItem("username");
    this.RequestBE.IsHr(username).then((res) => {
      if (res.toString() == "false") {
        this.IsHr = false;
      } else {
        this.IsHr = true;
      }
    });
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
