import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile2 } from '../create-profile2/create-profile2';

@Component({
  selector: 'page-create-profile',
  templateUrl: 'create-profile.html'
})
export class CreateProfile1Page {

  constructor(public navCtrl: NavController) {
  }
  GoToCreate3(){
    this.navCtrl.push(CreateProfile2);
  }
}
