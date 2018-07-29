import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-new-skill',
  templateUrl: 'add-new-skill.html'
})
export class AddNewSkillPage {

  constructor(public navCtrl: NavController) {
  }
  AddSkill(){
    this.navCtrl.push(AddNewSkillPage);
  }

}
