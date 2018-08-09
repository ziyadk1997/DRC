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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=this.infos.username;
    console.log(this.infos);
  }
  AddNewWork(){
    this.navCtrl.push(AddWorkExperiencePage);
  }
}
