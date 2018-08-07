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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=localStorage.getItem("username");
    console.log(this.infos);
  }
  AddNewLanguage(){
    this.navCtrl.push(AddLanguagePage);
  }
}
