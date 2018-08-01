import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewSkillPage } from '../add-new-skill/add-new-skill';

@Component({
  selector: 'page-view-profile2',
  templateUrl: 'view-profile2.html'
})

export class ViewProfile2Page {

  constructor(public navCtrl: NavController) {
  }
  AddNewSkill(){
    this.navCtrl.push(AddNewSkillPage);
  }
}
