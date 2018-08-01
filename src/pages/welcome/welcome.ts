import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../../pages/apply-leave/apply-leave';
import { ViewProfilePage } from '../../pages/view-profile/view-profile';
<<<<<<< HEAD
import { LeaveTrackerPage} from '../../pages/LeaveTracker/LeaveTracker';
import { WorkFromHomePage} from '../../pages/work-from-home/work-from-home';
=======
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { LoginPage } from '../login/login';
>>>>>>> 13963d2c4dd19ddbbbee87bce4d39191984a85d2
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
  
}
