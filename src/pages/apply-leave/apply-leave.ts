import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';

@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {

  constructor(public navCtrl: NavController) {
    console.log(this.navCtrl);
  }
  GoBack(){

    this.navCtrl.pop();
  }
 
}
