import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeaveTrackerPage } from '../LeaveTracker/LeaveTracker';
import { AnnualRequestPage } from '../annual-request/annual-request';
import { SwitchView } from '../../../node_modules/@angular/common/src/directives/ng_switch';
import { ServicesProvider } from '../../providers/services';
import { WelcomePage } from '../../pages/welcome/welcome';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-apply-leave',
  templateUrl: 'apply-leave.html'
})
export class ApplyLeavePage {
  MyDateFrom: any;
  MyDateTo: any;
  Request: any;
  HideFlag: boolean = false;
  selected: number;
  Comment: String;
  timeinday : String ;
  
  constructor(public navCtrl: NavController,private servicesprovider:ServicesProvider,private ApplyleaveBE: ServicesProvider,private alertCtrl: AlertController) {

  }
  GoBack() {
    this.navCtrl.pop();
  }
  GoToAnnualRequest(){
    this.navCtrl.pop();
  }
  ApplyCasualLeave(){
  if(this.selected==1){
this.timeinday = "Full Day";
  }
  if(this.selected==2){
    this.timeinday = " Work in First Half of Day";
      }
  if(this.selected==1){
        this.timeinday = "Work in Second Half of Day";
     }
    var username = localStorage.getItem("username");
    this.servicesprovider.ApplyAnnualandCasualLeaveRequest(username,this.MyDateFrom , this.MyDateTo,this.Comment, this.timeinday).then(res => {
      if (res == true) {
        this.alertCtrl.create(
          {
            title: 'Request Submitted',
            subTitle: 'Your request was submitted to your manager',
            buttons: ['Okay']
          }
        ).present()
        this.navCtrl.push(LeaveTrackerPage);
      } else {
        this.alertCtrl.create(
          {
            title: 'Request Submition failed',
            subTitle: 'Please fill request form correctly',
            buttons: ['Dismiss']
          }
        ).present()
      }
    });
   }
ApplyAnnualLeave(){

}
    Glow(id) {
    this.selected = id;
  }
  SetFlag(){
    
    if(this.Request=='Sick'){
      this.HideFlag = true;
    }else{
      this.HideFlag = false;
    }
    console.log(this.Request)
  }
  


}