import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEducationPage } from '../add-education/add-education';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-view-profile4',
  templateUrl: 'view-profile4.html'
})
export class ViewProfile4Page {
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
  AddNewEducation(){
    this.navCtrl.push(AddEducationPage);
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
