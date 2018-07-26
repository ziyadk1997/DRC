import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../../pages/apply-leave/apply-leave';
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
    
  }
  GoBack(){

    this.navCtrl.pop();
  }
  
  GoToApplyLeavePage(){

    this.navCtrl.push(ApplyLeavePage);
  }
  
  
}
