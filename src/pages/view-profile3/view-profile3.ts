import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkExperiencePage } from '../add-work-experience/add-work-experience';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-profile3',
  templateUrl: 'view-profile3.html'
})
export class ViewProfile3Page {

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
  AddNewWork(){
    this.navCtrl.push(AddWorkExperiencePage);
  }
  isUser(){
    if(this.name != this.userName && this.userName!=null)
      this.isSearch =false;
    else
      this.isSearch = true;
  }
}
