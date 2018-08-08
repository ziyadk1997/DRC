import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CreateProfile4 } from '../create-profile4/create-profile4';

@Component({
  selector: 'page-create-profile3',
  templateUrl: 'create-profile3.html'
})
export class CreateProfile3 {
    

  constructor(public navCtrl: NavController) {
  }

  GoToCreate4(){
    this.navCtrl.push(CreateProfile4);
  }
  
}