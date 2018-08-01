import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { ViewProfilePage } from '../view-profile/view-profile';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { LoginPage } from '../login/login';
import{WorkFromHomePage} from '../work-from-home/work-from-home';
import { FinancialPage} from '../financial/financial';


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
  GoLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
  
  GoToleaveTrackerPage(){

    this.navCtrl.push(LeaveTrackerPage);
  }
  GoToProfilePage(){
    this.navCtrl.push(ViewProfilePage);
  }
  GoToWorkFromHomePage(){
    this.navCtrl.push(WorkFromHomePage);
  }
  GoToFinancialPage(){
    this.navCtrl.push(FinancialPage);
  }
  
}
