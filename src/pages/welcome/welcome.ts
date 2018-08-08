import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApplyLeavePage } from '../apply-leave/apply-leave';
import { ViewProfilePage } from '../view-profile/view-profile';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { LoginPage } from '../login/login';
import { FinancialPage} from '../financial/financial';
import {ViewRequested} from '../ViewRequested/ViewRequested';
import { TravelExpensePage } from '../travelexpense/travelexpense';
import { CreateProfilePage } from '../create-profile0/create-profile0';
import { ServicesProvider } from '../../providers/services';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
   IsHr : boolean = false;
  constructor(public navCtrl: NavController, private RequestBE: ServicesProvider) {
  this.SetHr();
  }


  SetHr(){
    var username = localStorage.getItem("username");
    this.RequestBE.IsHrorAdminorOwner(username).then((res) => {
      if(res.toString() == "false"){
        this.IsHr=false;
      }else{
        this.IsHr=true;
      }
    });
  }
 
 
  GoBack(){

    this.navCtrl.pop();
  }
  GoLoginPage(){
    this.navCtrl.setRoot(LoginPage);
  }
  
  GoToleaveTrackerPage(){
    var username = localStorage.getItem("username");
    this.navCtrl.push(LeaveTrackerPage);
  
  }
  GoToProfilePage(){
    this.navCtrl.push(ViewProfilePage);
  }
  
  GoToFinancialPage(){
    this.navCtrl.push(FinancialPage);
  }
  GoToRequestsPage(){
    this.navCtrl.push(ViewRequested);
  }
  GoToTravelExpensePage(){
    this.navCtrl.push(TravelExpensePage);

  }
  GoToCreatePage(){
this.navCtrl.push(CreateProfilePage);
  }
  
}
