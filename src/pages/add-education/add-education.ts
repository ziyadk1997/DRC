import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-add-education',
  templateUrl: 'add-education.html'
})
export class AddEducationPage {

  constructor(public navCtrl: NavController) {
  }
  AddEducation(){
    // pushes data to backend and then clears the boxes
  }
}
