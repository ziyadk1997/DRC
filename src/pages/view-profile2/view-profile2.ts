import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewSkillPage } from '../add-new-skill/add-new-skill';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-profile2',
  templateUrl: 'view-profile2.html'

})

export class ViewProfile2Page {
  infos: any = {};
  userName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.infos = this.navParams.data;
    this.userName=localStorage.getItem("username");
    console.log(this.infos);

  }
  AddNewSkill() {
    this.navCtrl.push(AddNewSkillPage);
  }
}
