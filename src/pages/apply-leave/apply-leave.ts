import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
<<<<<<< HEAD
import { AnnualRequestPage } from '../annual-request/annual-request';
=======
import { WelcomePage } from '../welcome/welcome';

>>>>>>> 13963d2c4dd19ddbbbee87bce4d39191984a85d2
@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {
  MyDataFrom:any;
  MyDataTo:any;
  Request:any;
  HideFlag:boolean = false;
  constructor(public navCtrl: NavController) {
    
  }
  GoBack(){

    this.navCtrl.pop();
  }

  OnChange(){
    this.HideFlag = false;
  }
  Display(){
    this.HideFlag = true;
  }
  GoToAnnualRequest(){
    if(this.Request == "Sick"){
      this.navCtrl.push(AnnualRequestPage)
    }else{
      this.navCtrl.push(LeaveTrackerPage)
    }
  }
  Glow(){
    console.log("glowed");
  }
  openHomepage(){
    this.navCtrl.popToRoot();
  }
  
 
}
