import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-create-profile6',
  templateUrl: 'create-profile6.html'
})
export class CreateProfile6 {

  constructor(public navCtrl: NavController) {
  }
  SaveAndQuit(){
    this.navCtrl.setRoot(WelcomePage);
  }
  
}
