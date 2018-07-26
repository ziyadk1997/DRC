import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  
  Login(){
    this.navCtrl.push(WelcomePage)//setRoot(WelcomePage);
  }
}
