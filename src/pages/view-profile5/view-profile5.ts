import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddLanguagePage } from '../add-language/add-language';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-view-profile5',
  templateUrl: 'view-profile5.html'
})
export class ViewProfile5Page {
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
  AddNewLanguage(){
    this.navCtrl.push(AddLanguagePage);
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
