import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../../pages/apply-leave/apply-leave';
import { ViewProfilePage } from '../../pages/view-profile/view-profile';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { LoginPage } from '../login/login';
import{WorkFromHomePage} from '../work-from-home/work-from-home';
import { FinancialPage} from '../../pages/financial/financial';
import {ViewRequested} from '../../pages/ViewRequested/ViewRequested';

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
  GoToRequestsPage(){
    this.navCtrl.push(ViewRequested);
  }
  
}
