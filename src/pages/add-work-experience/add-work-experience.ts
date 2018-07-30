import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-work-experience',
  templateUrl: 'add-work-experience.html'
})
export class AddWorkExperiencePage {

  constructor(public navCtrl: NavController) {
  }
  AddNewWork(){
    this.navCtrl.push(AddWorkExperiencePage);
  }
}
