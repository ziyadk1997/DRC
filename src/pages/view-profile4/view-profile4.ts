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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=localStorage.getItem("username");
    console.log(this.infos);
  }
  AddNewEducation(){
    this.navCtrl.push(AddEducationPage);
  }
}
