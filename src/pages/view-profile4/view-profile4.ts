import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddEducationPage } from '../add-education/add-education';

@Component({
  selector: 'page-view-profile4',
  templateUrl: 'view-profile4.html'
})
export class ViewProfile4Page {

  constructor(public navCtrl: NavController) {
  }
  AddNewEducation(){
    this.navCtrl.push(AddEducationPage);
  }
}
