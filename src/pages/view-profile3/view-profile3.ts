import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddWorkExperiencePage } from '../add-work-experience/add-work-experience';

@Component({
  selector: 'page-view-profile3',
  templateUrl: 'view-profile3.html'
})
export class ViewProfile3Page {

  constructor(public navCtrl: NavController) {
  }
  AddNewWork(){
    this.navCtrl.push(AddWorkExperiencePage);
  }
}
