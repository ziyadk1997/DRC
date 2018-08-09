import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile6 } from '../create-profile6/create-profile6';

@Component({
  selector: 'page-create-profile5',
  templateUrl: 'create-profile5.html'
})
export class CreateProfile5 {

  constructor(public navCtrl: NavController) {
  }
  GoToCreate6(){
    this.navCtrl.push(CreateProfile6);
  }
}
